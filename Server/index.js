import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 7000;

// Middleware
app.use(bodyParser.json());
app.use(express.json({ limit: '10mb' }));

// Connect DB once
mongoose.connect('mongodb://localhost:27017/admin')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err.message));

// Routes
app.use('/api/users', userRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
