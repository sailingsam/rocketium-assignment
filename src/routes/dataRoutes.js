import { Router } from 'express';
import { getData, getUserData } from '../controllers/dataController.js';

const router = Router();

// Route for getting and sorting data
router.get('/', getData);

// Route for getting data by ID
router.get('/:id', getUserData);

export default router;
