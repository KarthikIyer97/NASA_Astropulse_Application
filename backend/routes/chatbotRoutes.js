import express from "express";
import { chatWithGPT } from "../controllers/chatbotController.js";

const router = express.Router();

router.post("/chat", chatWithGPT);

export default router;
