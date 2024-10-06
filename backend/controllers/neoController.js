import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const NASA_API_KEY = process.env.NASA_API_KEY;

export const getNeoData = async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(400).json({ message: 'Start date and end date are required' });
    }

    try {
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed`, {
            params: {
                start_date: startDate,
                end_date: endDate,
                api_key: NASA_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching NEO data:', error.message);
        res.status(500).json({ message: 'Error fetching NEO data' });
    }
};
