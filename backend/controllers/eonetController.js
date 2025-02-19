

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const NASA_WILDFIRE_API = 'https://eonet.gsfc.nasa.gov/api/v2.1/categories/8?days=180';

// Extract country from event title
const getCountry = (title) => {
  const knownCountries = ['USA', 'Australia', 'Canada', 'India', 'Mexico', 'Brazil', 'Russia'];
  const country = knownCountries.find(country => title.includes(country));
  return country || 'Unknown';
};

// Fetch & Filter Wildfire Data
export const getEonetData = async (req, res) => {
  try {
    const today = new Date();
    const june2024 = new Date('2024-06-01');

    const response = await axios.get(NASA_WILDFIRE_API);
    if (!response.data || !response.data.events) {
      return res.status(500).json({ error: 'No wildfire data available' });
    }

    // Filter wildfires between June 2024 - Present
    const filteredEvents = response.data.events
      .filter(event => event.geometries && event.geometries.length > 0)
      .map(event => ({
        ...event,
        country: getCountry(event.title),
        date: new Date(event.geometries[0].date),
      }))
      .filter(event => event.date >= june2024 && event.date <= today);

    res.json({ events: filteredEvents });

  } catch (error) {
    console.error('Error fetching EONET data:', error);
    res.status(500).json({ error: 'Failed to fetch wildfire data' });
  }
};

