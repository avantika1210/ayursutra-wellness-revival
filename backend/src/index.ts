import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRouter from './routes/users';
import bookingsRouter from './routes/bookings';
import therapiesRouter from './routes/therapies';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Modular API routes
app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/therapies', therapiesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
