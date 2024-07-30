import express from 'express';
import dataRoutes from './routes/dataRoutes.js';
import { fetchData } from './fetchData.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/data', dataRoutes);

// Global error handling middleware
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await fetchData();
});