import fs from 'fs';
import path from 'path';
import { connectDb } from '../config';
import { Tour } from '../models';
import { safeParseNumber } from '../utils';

async function seedTours() {
  try {
    console.log('Starting to seed Tours 🚀');

    console.log('Connecting to db 💻');
    await connectDb();

    console.log('Reading data 💻');
    const filePath = path.join(__dirname, '../data/toursData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const transformedData = data.map((elm) => ({
      ...elm,
      location: elm.city,
      price: safeParseNumber(elm.price),
    }));

    console.log('Inserting data 💻');
    await Tour.deleteMany({});
    await Tour.insertMany(transformedData);

    console.log('🙌 Tours seeded successfully!');
    process.exit();
  } catch (error) {
    console.log('🛑 Error seeding tours:', error);
    process.exit(1);
  }
}

seedTours();
