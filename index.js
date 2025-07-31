import express from 'express';
import dotenv from 'dotenv';
import {connectDatabase} from './data-source.js';
import peopleRoutes from './src/routes/people.js';
import planetsRoutes from './src/routes/planets.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/people', peopleRoutes);
app.use('/api/planets', planetsRoutes);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });
