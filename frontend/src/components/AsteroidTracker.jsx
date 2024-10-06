import React, { useEffect, useState } from "react";
import DatePicker from './DatePicker';
import NeoList from './NeoList';
import NeoFilters from './NeoFilters'; // Import NeoFilters
import Navbar from './Navbar';
import Footer from './Footer';
import NeoChart from './NeoChart';

const AsteroidTracker = () => {
  const [neoData, setNeoData] = useState([]); // All NEO data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [filteredData, setFilteredData] = useState([]); // Filtered NEO data
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Background image index
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility
  const [selectedDate, setSelectedDate] = useState(''); // Selected date for filter

  // Array of image URLs for the background
  const images = [
    '/background-image1.jpg',
    '/background-image2.jpg',
    '/background-image3.jpg',
    '/background-image4.jpg'
  ];

  // Function to fetch NEO data from the API
  const fetchNeoData = async (startDate, endDate) => {
    setLoading(true);
    setError('');
    console.log(`Fetching data for start date: ${startDate} and end date: ${endDate}`);

    try {
      const response = await fetch(`https://nasa-app-backenddd.onrender.com/api/neo?startDate=${startDate}&endDate=${endDate}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Asteroid Data');
      }

      const data = await response.json();
      console.log('Fetched NEO Data:', data);

      // Collect all NEOs for the selected date range
      const allNeoData = Object.values(data.near_earth_objects).flat();

      // Set the NEO data and filtered data
      setNeoData(allNeoData);
      setFilteredData(allNeoData); // Set the filtered data initially to all fetched data

    } catch (err) {
      console.error('Error fetching NEO data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cycle through background images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Handle filter change based on date and hazardous asteroids
  const handleFilterChange = (nearestApproachDate, isPotentiallyHazardous) => {
    setSelectedDate(nearestApproachDate); // Set the selected date
    const filtered = neoData.filter((neo) => {
      return neo.close_approach_data.some((approach) =>
        new Date(approach.close_approach_date).toISOString().split('T')[0] === nearestApproachDate &&
        (isPotentiallyHazardous ? neo.is_potentially_hazardous_asteroid : true)
      );
    });

    setFilteredData(filtered); // Update filtered data
    setModalOpen(true); // Open modal with the filtered results
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen text-white bg-gray-900"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="container mx-auto p-4">
          <h1 className="text-4xl text-white font-bold text-center mb-8">Asteroid Tracker</h1>

          {/* Start Date, End Date, and Filters */}
          <div className="flex flex-col items-center mb-6">
            <DatePicker onDateChange={fetchNeoData} /> {/* Fetch NEO data based on the selected date */}
            
            <div className="mt-4 w-full">
              <NeoFilters onFilterChange={handleFilterChange} /> {/* Filters placed right below DatePicker */}
            </div>
          </div>

          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {filteredData.length > 0 ? (
            <NeoList neoData={filteredData} />
          ) : (
            !loading && <p className="text-center">No NEOs found for the selected date range.</p>
          )}
        </div>
      </div>

      {/* Modal for filtered results */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold text-white">Approach Date: {selectedDate} - Potentially Hazardous Asteroids</h2>
            <ul className="overflow-y-auto max-h-60 text-white">
              {filteredData.map((neo, index) => (
                <li key={index} className="text-gray-300">
                  {neo.name}
                </li>
              ))}
            </ul>
            <button onClick={() => setModalOpen(false)} className="mt-2 bg-blue-500 text-white p-2 rounded">Close</button>
          </div>
        </div>
      )}

      <NeoChart neoData={filteredData} />

      <Footer mainText="© 2024 Asteroid Tracker. All Rights Reserved." subText="Built with love for astronomy enthusiasts." />
    </>
  );
};

export default AsteroidTracker;
