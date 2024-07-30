// src/index.js
import express from 'express';
import dataRoutes from './routes/dataRoutes.js';
import { fetchData } from './fetchData.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/data', dataRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await fetchData();
});