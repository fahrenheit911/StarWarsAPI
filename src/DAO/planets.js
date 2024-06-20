import AppDataSource from '../../data-source.js';
import Planets from '../entities/Planets.js';

const getPlanets = async () => {
  const planetsRepository = AppDataSource.getRepository(Planets);
  return await planetsRepository.find();
};

const getPlanetById = async id => {
  const planetsRepository = AppDataSource.getRepository(Planets);
  return await planetsRepository.findOneBy({id});
};

const createPlanet = async planetData => {
  const planetsRepository = AppDataSource.getRepository(Planets);
  const planet = planetsRepository.create(planetData);
  return await planetsRepository.save(planet);
};
export default {getPlanets, getPlanetById, createPlanet};
