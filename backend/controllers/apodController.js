import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const NASA_API_KEY = process.env.NASA_API_KEY;


export const getApodData = async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod`, {
            params: {
                api_key: NASA_API_KEY,
            },
        });
        res.json(response.data);

    } catch (error) {
        console.error('Error fetching APOD data:', error);
        res.status(500).json({error: 'Failed to fetch APOD dara from NASA'})
    }
};