import { connectDb } from '../config';
import path from 'path';
import fs from 'fs';
import { Tour } from '../models';

async function seedTours() {
  try {
    console.log('Starting to seed Tours 🚀');

    console.log('Connecting to db 💻');
    await connectDb();

    console.log('Reading data 💻');
    const filePath = path.join(__dirname, '../data/toursData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    console.log('Inserting data 💻');
    await Tour.deleteMany({});
    await Tour.insertMany(data);

    console.log('🙌 Tours seeded successfully!');
    process.exit();
  } catch (error) {
    console.log('🛑 Error seeding tours:', error);
    process.exit(1);
  }
}

seedTours();
