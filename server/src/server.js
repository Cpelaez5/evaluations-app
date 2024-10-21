import express from 'express';
import morgan from 'morgan';
import employeeRoutes from './routes/employee.routes.js';
import evaluationsRoutes from './routes/evaluations.routes.js';
import usersRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import feedbackRoutes from './routes/feedback.routes.js'; // Importar el router de feedback
import reportRoutes from './routes/report.routes.js'; // Importar el router de reportes
import { createRoles } from './lib/initialSetup.js';

const app = express();
createRoles();

app.use(express.json());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});

app.use('/api/users', usersRoutes);
app.use('/api/evaluations', evaluationsRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/reports', reportRoutes);

export default app;