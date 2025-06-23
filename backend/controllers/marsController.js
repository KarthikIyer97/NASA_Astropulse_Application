// marsController.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const NASA_API_KEY = process.env.NASA_API_KEY;

export const getMarsPhotos = async (req, res) => {
  const { sol } = req.query;

  if (!sol) {
    return res.status(400).json({ message: 'Sol (Martian day) is required' });
  }

  try {
    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`, {
      params: {
        sol,
        api_key: NASA_API_KEY,
      },
    });

    const photos = response.data.photos;
    if (!photos.length) {
      return res.status(404).json({ message: `No photos found for sol ${sol}` });
    }

    res.json({ sol, count: photos.length, photos });
  } catch (error) {
    console.error(`Error fetching Mars photos for sol ${sol}:`, error.message);
    res.status(500).json({ message: 'Error fetching Mars photos' });
  }
};
