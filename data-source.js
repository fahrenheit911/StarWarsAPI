import {DataSource} from 'typeorm';
import dotenv from 'dotenv';
import People from './src/entities/People.js';
import Planets from './src/entities/Planets.js';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [People, Planets],
  synchronize: true,
  logging: false,
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

export default AppDataSource;
