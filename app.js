import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/joke-api', async(req, res) => {
    try {
        const response = await axios.get(process.env.JOKE_API_URL);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to fetch joke'
        })
    }
});

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});