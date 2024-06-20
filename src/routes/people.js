import express from 'express';
import peopleController from '../controllers/people.js';

const router = express.Router();

router.get('/', peopleController.getPeople);
router.get('/:id', peopleController.getPersonById);
router.post('/', peopleController.createPerson);

export default router;
