import axios from 'axios';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';
const dataFilePath = join(__dirname, '..', 'data', 'dummyData.json');

export async function fetchData() {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(dataFilePath, JSON.stringify(response.data, null, 2));
    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}