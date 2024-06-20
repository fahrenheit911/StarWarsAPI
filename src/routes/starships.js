import express from 'express';
import starshipsController from '../controllers/starships.js';

const router = express.Router();

router.get('/', starshipsController.getStarships);
router.get('/:id', starshipsController.getStarshipById);
router.post('/', starshipsController.createStarship);

export default router;
