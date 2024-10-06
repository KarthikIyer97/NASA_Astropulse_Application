import express from 'express';
import { getApodData } from '../controllers/apodController.js';

const router = express.Router();

router.get('/apod', getApodData);

export default router;