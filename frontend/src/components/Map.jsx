import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
import Loader from './Loader';
import Footer from './Footer';

// Custom icon for wildfire markers
const fireIcon = new L.Icon({
  iconUrl: '/flame.png', // Path to the flame icon
  iconSize: [15, 15], // Adjust size as necessary
});

const Map = () => {
  const [eventData, setEventData] = useState([]); // All events
  const [filteredEvents, setFilteredEvents] = useState([]); // Filtered events based on the year
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All'); // Track the selected year

  // Fetch wildfire events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://nasa-app-backenddd.onrender.com/api/eonet`); // Your API endpoint
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await res.json();
        setEventData(data.events);
        setFilteredEvents(data.events); // Initialize with all events
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter wildfires based on the selected year
  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);

    if (selectedYear === 'All') {
      setFilteredEvents(eventData); // Show all events
    } else {
      const filtered = eventData.filter((event) => {
        const eventYear = new Date(event.geometry[0].date).getFullYear();
        return eventYear === parseInt(selectedYear, 10); // Match year with selected value
      });
      setFilteredEvents(filtered);
    }
  };

  // Manually limit the filter to 2023, 2022, and 2024
  const allowedYears = [2023, 2022, 2024];

  // Map center (you can adjust the default lat/lng)
  const initialMapCenter = [42.3265, -122.8756]; // Example center

  return (
    <div>
      <Navbar />

      {/* Render filter dropdown only after loading is complete */}
      {!loading && eventData.length > 0 && (
        <div className="filter-container">
          <label htmlFor="year-select">Filter by Year:</label>
          <select id="year-select" value={selectedYear} onChange={handleYearChange}>
            <option value="All">All</option>
            {allowedYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <MapContainer
          center={initialMapCenter}
          zoom={6}
          style={{ height: '100vh', width: '100%' }}
        >
          {/* TileLayer is the base map (you can use other map providers) */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Wildfire markers filtered by the selected year */}
          {filteredEvents.map((event, index) => {
            const { categories, geometry, title } = event;
            const isWildfire = categories.some((cat) => cat.id === 'wildfires');

            if (isWildfire && geometry.length > 0) {
              const [lng, lat] = geometry[0].coordinates;
              const eventDate = new Date(geometry[0].date).toLocaleDateString(); // Get the full date

              return (
                <Marker
                  key={index}
                  position={[lat, lng]}
                  icon={fireIcon}
                  eventHandlers={{
                    mouseover: (e) => {
                      e.target.openPopup(); // Open the popup on hover
                    },
                    mouseout: (e) => {
                      e.target.closePopup(); // Close the popup when the mouse leaves
                    }
                  }}
                >
                  <Popup>
                    <strong>{title}</strong>
                    <br />
                    Date: {eventDate} {/* Show the full date */}
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      )}
      <Footer mainText="Learn more about our mission to track wildfire across the globe." subText="Bringing you closer to the events in world." />
    </div>
  );
};

export default Map;

