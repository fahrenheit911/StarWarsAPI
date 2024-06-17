import express from 'express';
import dotenv from 'dotenv';
import AppDataSource, { connectDatabase } from './data-source.js';
import People from './src/entities/People.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/people', async (req, res) => {
  try {
    const peopleRepository = AppDataSource.getRepository(People);
    const person = peopleRepository.create(req.body);
    const result = await peopleRepository.save(person);
    res.json(result);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/people', async (req, res) => {
  try {
    const peopleRepository = AppDataSource.getRepository(People);
    const people = await peopleRepository.find();
    res.json(people);
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to the database:', error);
});
