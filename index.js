import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './data-source.js';
import peopleRoutes from './src/routes/people.js';
import planetsRoutes from './src/routes/planets.js';
import starshipsRoutes from './src/routes/starships.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log('🚀 Starting Star Wars API server...');
console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🔌 Port: ${PORT}`);

app.use(express.json());
console.log('📝 JSON middleware enabled');

app.use('/api/people', peopleRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/starships', starshipsRoutes);
console.log('🛣️  API routes configured:');
console.log('   👥 /api/people');
console.log('   🌍 /api/planets');
console.log('   🚀 /api/starships');

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log('🎉 Star Wars API server is running!');
      console.log(`🌐 Server URL: http://localhost:${PORT}`);
      console.log(`📚 API Documentation:`);
      console.log(`   GET  http://localhost:${PORT}/api/people`);
      console.log(`   GET  http://localhost:${PORT}/api/planets`);
      console.log(`   GET  http://localhost:${PORT}/api/starships`);
      console.log('✨ Ready to serve Star Wars data!');
    });
  })
  .catch((error) => {
    console.error('❌ Failed to start server');
    console.error('🔍 Error details:', error.message);
    console.error('💡 Make sure the database is running and accessible');
    process.exit(1);
  });
