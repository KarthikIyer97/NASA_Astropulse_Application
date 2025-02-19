import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import neoRoutes from './routes/neoRoutes.js'
import apodRoutes from './routes/apodRoutes.js'
import eonetRoutes from './routes/eonetRoutes.js'
import chatbotRoutes from './routes/chatbotRoutes.js'
import compression from 'compression';

dotenv.config()

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

app.use('/api', neoRoutes);
app.use('/api', apodRoutes);
app.use('/api', eonetRoutes);
app.use('/api', chatbotRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

