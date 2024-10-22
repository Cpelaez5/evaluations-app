import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; // Importar el paquete cors
import employeeRoutes from './routes/employee.routes.js';
import evaluationsRoutes from './routes/evaluations.routes.js';
import usersRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import feedbackRoutes from './routes/feedback.routes.js'; // Importar el router de feedback
import reportRoutes from './routes/report.routes.js'; // Importar el router de reportes
import { createRoles } from './lib/initialSetup.js';

const app = express();
createRoles();

// Configurar CORS
app.use(cors()); // Habilitar CORS para todas las rutas

// Si deseas permitir solo ciertos orígenes, puedes configurarlo así:
// app.use(cors({
//     origin: ['https://tudominio.com', 'https://otrotudominio.com']
// }));

app.use(express.json());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json({ emoji: '👋', message: "Welcome to the 360 Evaluations API", developed_by:"Carlos Peláez" });
});


app.use('/api/users', usersRoutes);
app.use('/api/evaluations', evaluationsRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/reports', reportRoutes);

export default app;