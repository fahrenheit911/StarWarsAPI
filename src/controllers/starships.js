import starshipsService from '../services/starships.js';

const getStarships = async (req, res) => {
  try {
    const starships = await starshipsService.getStarships();
    res.json(starships);
  } catch (error) {
    console.error('Error fetching starships:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const getStarshipById = async (req, res) => {
  try {
    const {id} = req.params;
    const starship = await starshipsService.getStarshipById(id);
    if (starship) {
      res.json(starship);
    } else {
      res.status(404).json({error: 'Starship not found'});
    }
  } catch (error) {
    console.error('Error fetching starship:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const createStarship = async (req, res) => {
  try {
    const starship = await starshipsService.createStarship(req.body);
    res.json(starship);
  } catch (error) {
    console.error('Error creating starship:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default {getStarships, getStarshipById, createStarship};
