import AppDataSource from '../../data-source.js';
import People from '../entities/People.js';

const getPeople = async () => {
  const peopleRepository = AppDataSource.getRepository(People);
  return await peopleRepository.find();
};

const getPersonById = async id => {
  const peopleRepository = AppDataSource.getRepository(People);
  return await peopleRepository.findOneBy({id});
};

const createPerson = async personData => {
  const peopleRepository = AppDataSource.getRepository(People);
  const person = peopleRepository.create(personData);
  return await peopleRepository.save(person);
};
export default {getPeople, getPersonById, createPerson};
