import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const { EVALUATIONS_APP_MONGODB_HOST } = process.env;
const MONGODB_URI = `${EVALUATIONS_APP_MONGODB_HOST}`;

mongoose.connect(MONGODB_URI,{})

    .then(db => console.log('Database connected'))
    .catch(err => console.error(err));