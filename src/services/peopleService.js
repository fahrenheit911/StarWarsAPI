import peopleDAO from '../DAO/peopleDAO.js';

const getPeople = async () => {
  return await peopleDAO.getPeople();
};

const getPersonById = async id => {
  return await peopleDAO.getPersonById(id);
};

const createPerson = async personData => {
  return await peopleDAO.createPerson(personData);
};

export default {getPeople, getPersonById, createPerson};
