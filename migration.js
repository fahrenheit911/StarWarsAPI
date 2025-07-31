import axios from 'axios';
import { connectDatabase } from './data-source.js';
import People from './src/entities/People.js';
import Planets from './src/entities/Planets.js';
import Starships from './src/entities/Starships.js';
import AppDataSource from './data-source.js';

const fetchSWAPI = async (endpoint) => {
  try {
    const response = await axios.get(`https://swapi.info/api/${endpoint}`);
    if (!Array.isArray(response.data)) {
      throw new Error(`Unexpected response for ${endpoint}: ${JSON.stringify(response.data)}`);
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error.message);
    return [];
  }
};

function toIntOrNull(value) {
  const n = parseInt(value, 10);
  return isNaN(n) ? null : n;
}

function toFloatOrNull(value) {
  const n = parseFloat(value);
  return isNaN(n) ? null : n;
}

function cleanEntity(entity, intFields = [], floatFields = []) {
  const cleaned = { ...entity };
  intFields.forEach((field) => {
    cleaned[field] = toIntOrNull(entity[field]);
  });
  floatFields.forEach((field) => {
    cleaned[field] = toFloatOrNull(entity[field]);
  });
  return cleaned;
}

const migrateData = async () => {
  console.log('🔄 Connecting to database...');
  await connectDatabase();

  if (!AppDataSource.isInitialized) {
    console.error('❌ Database is not initialized');
    process.exit(1);
  }

  console.log('📡 Fetching data from SWAPI...');
  const peopleRepository = AppDataSource.getRepository(People);
  const planetsRepository = AppDataSource.getRepository(Planets);
  const starshipsRepository = AppDataSource.getRepository(Starships);

  const [people, planets, starships] = await Promise.all([
    fetchSWAPI('people'),
    fetchSWAPI('planets'),
    fetchSWAPI('starships'),
  ]);

  const cleanPeople = people.map((person) => cleanEntity(person, ['height', 'mass']));
  const cleanPlanets = planets.map((planet) =>
    cleanEntity(planet, ['rotation_period', 'orbital_period', 'diameter', 'surface_water'])
  );
  const cleanStarships = starships.map((starship) =>
    cleanEntity(
      starship,
      [
        'cost_in_credits',
        'length',
        'max_atmosphering_speed',
        'crew',
        'passengers',
        'cargo_capacity',
        'MGLT',
      ],
      ['hyperdrive_rating']
    )
  );

  console.log('💾 Saving data to database...');

  let peopleSaved = false;
  let planetsSaved = false;
  let starshipsSaved = false;

  try {
    await peopleRepository.save(cleanPeople);
    console.log('✅ People saved successfully');
    peopleSaved = true;
  } catch (e) {
    console.error('❌ Error saving people:', e.message);
    if (e.message.includes('No metadata')) {
      console.error('   This usually means the database connection or entity registration failed');
    }
  }

  try {
    await planetsRepository.save(cleanPlanets);
    console.log('✅ Planets saved successfully');
    planetsSaved = true;
  } catch (e) {
    console.error('❌ Error saving planets:', e.message);
    if (e.message.includes('No metadata')) {
      console.error('   This usually means the database connection or entity registration failed');
    }
  }

  try {
    await starshipsRepository.save(cleanStarships);
    console.log('✅ Starships saved successfully');
    starshipsSaved = true;
  } catch (e) {
    console.error('❌ Error saving starships:', e.message);
    if (e.message.includes('No metadata')) {
      console.error('   This usually means the database connection or entity registration failed');
    }
  }

  const totalSaved = [peopleSaved, planetsSaved, starshipsSaved].filter(Boolean).length;
  console.log(`📊 Migration summary: ${totalSaved}/3 entities saved successfully`);
  console.log(`   People: ${peopleSaved ? '✅' : '❌'} (${cleanPeople.length} records)`);
  console.log(`   Planets: ${planetsSaved ? '✅' : '❌'} (${cleanPlanets.length} records)`);
  console.log(`   Starships: ${starshipsSaved ? '✅' : '❌'} (${cleanStarships.length} records)`);

  if (totalSaved === 3) {
    console.log('🎉 All data migrated successfully!');
    console.log('✅ Migration completed successfully');
  } else {
    console.log('⚠️  Some data failed to migrate. Check the logs above for details.');
    process.exit(1);
  }
};

migrateData().catch((error) => {
  console.error('💥 Fatal error during data migration:', error);
  process.exit(1);
});
