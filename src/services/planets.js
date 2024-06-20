import planetsDAO from '../DAO/planets.js';

const getPlanets = async () => {
  return await planetsDAO.getPlanets();
};

const getPlanetById = async id => {
  return await planetsDAO.getPlanetById(id);
};

const createPlanet = async planetData => {
  return await planetsDAO.createPlanet(planetData);
};

export default {getPlanets, getPlanetById, createPlanet};
