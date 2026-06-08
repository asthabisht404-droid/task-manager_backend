const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.use(notFound);
app.use(errorHandler);