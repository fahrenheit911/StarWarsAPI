import peopleService from '../services/peopleService.js';

const getPeople = async (req, res) => {
  try {
    const people = await peopleService.getPeople();
    res.json(people);
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const getPersonById = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(id);
    const person = await peopleService.getPersonById(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({error: 'Person not found'});
    }
  } catch (error) {
    console.error('Error fetching person:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const createPerson = async (req, res) => {
  try {
    const person = await peopleService.createPerson(req.body);
    res.json(person);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default {getPeople, getPersonById, createPerson};
