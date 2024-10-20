import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { EVALUATIONS_APP_MONGODB_HOST, EVALUATIONS_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${EVALUATIONS_APP_MONGODB_HOST}/${EVALUATIONS_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI,{})

    .then(db => console.log('Database connected'))
    .catch(err => console.error(err));