import starshipsDAO from '../DAO/starships.js';

const getStarships = async () => {
  return await starshipsDAO.getStarships();
};

const getStarshipById = async id => {
  return await starshipsDAO.getStarshipById(id);
};

const createStarship = async starshipData => {
  return await starshipsDAO.createStarship(starshipData);
};

export default {getStarships, getStarshipById, createStarship};
