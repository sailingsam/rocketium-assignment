import fs from 'fs';
import { join } from 'path';

const dataFilePath = join(__dirname, '..', '..', 'data', 'dummyData.json');

// Read data from the JSON file
const readData = () => {
  return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
};

// Handler to get all data
export const getData = (req, res) => {
  const data = readData();
  res.json(data);
};

// Handler to filter and sort data
export const filterAndSortData = (req, res) => {
  let data = readData();
  const { filter, sort } = req.query;

  // Filtering logic
  if (filter) {
    data = data.filter(item => item.someField && item.someField.includes(filter));
  }

  // Sorting logic
  if (sort) {
    data.sort((a, b) => {
      if (sort === 'asc') return a.someField.localeCompare(b.someField);
      if (sort === 'desc') return b.someField.localeCompare(a.someField);
      return 0;
    });
  }

  res.json(data);
};
