

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const NASA_API_KEY = process.env.NASA_API_KEY; // Ensure the key is set correctly in your environment

// Function to fetch EONET data with API Key
export const getEonetData = async (req, res) => {
  try {
    const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/events', {
      params: {
        api_key: NASA_API_KEY, // Pass the API key as a query parameter
      },
    });
    res.json(response.data); // Send the fetched data as a JSON response

  } catch (error) {
    console.error('Error fetching EONET data:', error); // Log the error
    res.status(500).json({ error: 'Failed to fetch natural event data from EONET API' }); // Respond with an error message
  }
};

