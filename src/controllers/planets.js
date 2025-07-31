import planetsService from '../services/planets.js';

const getPlanets = async (req, res) => {
  try {
    const planets = await planetsService.getPlanets();
    res.json(planets);
  } catch (error) {
    console.error('Error fetching planets:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const getPlanetById = async (req, res) => {
  try {
    const {id} = req.params;
    const planet = await planetsService.getPlanetById(id);
    if (planet) {
      res.json(planet);
    } else {
      res.status(404).json({error: 'Planet not found'});
    }
  } catch (error) {
    console.error('Error fetching planet:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const createPlanet = async (req, res) => {
  try {
    const planet = await planetsService.createPlanet(req.body);
    res.json(planet);
  } catch (error) {
    console.error('Error creating planet:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default {getPlanets, getPlanetById, createPlanet};
