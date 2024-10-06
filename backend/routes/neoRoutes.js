import express from 'express';
import { getNeoData } from '../controllers/neoController.js';

const router = express.Router();

router.get('/neo', getNeoData);

export default router;


