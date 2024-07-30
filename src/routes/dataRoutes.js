import { Router } from 'express';
import { getData, filterAndSortData } from '../controllers/dataController.js';

const router = Router();

// for getting all data
router.get('/', getData);

// for filtering/sorting data
router.get('/filter', filterAndSortData);

export default router;
