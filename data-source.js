import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import People from './src/entities/People.js';
import Planets from './src/entities/Planets.js';
import Starships from './src/entities/Starships.js';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [People, Planets, Starships],
  synchronize: true,
  logging: false,
});

export const connectDatabase = async () => {
  try {
    console.log('🔌 Attempting to connect to PostgreSQL database...');

    await AppDataSource.initialize();

    console.log('✅ Successfully connected to PostgreSQL database');
    console.log('📊 Database entities loaded: People, Planets, Starships');
    console.log('🔄 Database synchronization enabled');
  } catch (error) {
    console.error('❌ Failed to connect to database');
    console.error('🔍 Error details:', error.message);

    if (error.code === 'ECONNREFUSED') {
      console.error('💡 This usually means PostgreSQL is not running or not ready yet');
    } else if (error.message.includes('authentication')) {
      console.error('💡 Check your database credentials in DATABASE_URL');
    } else if (error.message.includes('database') && error.message.includes('does not exist')) {
      console.error('💡 Database does not exist. Make sure it was created');
    }

    throw error;
  }
};

export default AppDataSource;
