import express from 'express';
import { getMarsPhotos } from '../controllers/marsController.js';

const router = express.Router();

router.get('/marsphotos', getMarsPhotos);

export default router;
