import express from 'express';
import userRoutes from './routes/user.routes.js'

const app = express();

//middlewares
app.use(express.json());

app.use(userRoutes);

export default app;
