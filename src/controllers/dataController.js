import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = join(__dirname, "..", "..", "data", "dummyData.json");

// Read data from the JSON file
const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  } catch (error) {
    throw new Error('Failed to read data file');
  }
};

// Route for getting, filtering, and sorting data
export const getData = (req, res) => {
  try {
    const data = readData(); // Fetch data from the source

    const { sortby = 'name', order = 'asc', language, version_min, version_max } = req.query;

    // Filtering by language
    let filteredData = data;
    if (language) {
      filteredData = filteredData.filter(item => item.language === language);
    }

    // Filtering by version range
    if (version_min || version_max) {
      const minVersion = version_min ? parseFloat(version_min) : -Infinity;
      const maxVersion = version_max ? parseFloat(version_max) : Infinity;

      if (isNaN(minVersion) || isNaN(maxVersion)) {
        return res.status(400).json({ error: 'Invalid version range parameters' });
      }

      filteredData = filteredData.filter(item => {
        const version = parseFloat(item.version);
        return version >= minVersion && version <= maxVersion;
      });
    }

    // Validation for sort parameters
    if (!['asc', 'desc'].includes(order)) {
      return res.status(400).json({ error: 'Invalid sort order. Use "asc" or "desc"' });
    }
    if (!filteredData.every(item => item.hasOwnProperty(sortby))) {
      return res.status(400).json({
        error: `Invalid sortby parameter. No data field named "${sortby}"`,
      });
    }

    // Sorting
    const sortedData = filteredData.sort((a, b) => {
      if (order === 'asc') {
        return a[sortby] > b[sortby] ? 1 : a[sortby] < b[sortby] ? -1 : 0;
      } else {
        return a[sortby] < b[sortby] ? 1 : a[sortby] > b[sortby] ? -1 : 0;
      }
    });

    res.json(sortedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getUserData = (req, res) => {
  try {
    const data = readData();
    const { id } = req.params;

    const user = data.find((item) => item.id === id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .JSON({ error: error.message + "backend me error hai!" });
  }
};
