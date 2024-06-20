import express from 'express';
import planetsController from '../controllers/planets.js';

const router = express.Router();

router.get('/', planetsController.getPlanets);
router.get('/:id', planetsController.getPlanetById);
router.post('/', planetsController.createPlanet);

export default router;
