import AppDataSource from '../../data-source.js';
import Starships from '../entities/Starships.js';

const getStarships = async () => {
  const starshipsRepository = AppDataSource.getRepository(Starships);
  return await starshipsRepository.find();
};

const getStarshipById = async id => {
  const starshipsRepository = AppDataSource.getRepository(Starships);
  return await starshipsRepository.findOneBy({id});
};

const createStarship = async starshipData => {
  const starshipsRepository = AppDataSource.getRepository(Starships);
  const starship = starshipsRepository.create(starshipData);
  return await starshipsRepository.save(starship);
};
export default {getStarships, getStarshipById, createStarship};
