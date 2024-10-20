import express from 'express';
import morgan from 'morgan';
import employeeRoutes from './routes/employee.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
});

app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

module.exports = app