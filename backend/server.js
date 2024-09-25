import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import { initializeDatabase } from './config/database.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

initializeDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
