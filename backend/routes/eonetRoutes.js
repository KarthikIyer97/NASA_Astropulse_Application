import express from 'express';
import { getEonetData } from '../controllers/eonetController.js'; // Assuming it's stored in controllers folder

const router = express.Router();

router.get('/eonet', getEonetData); // Route to handle fetching EONET data

export default router;
