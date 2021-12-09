import { Router } from 'express';
import { userRoutes } from './userRoutes';

const routesController = Router();

routesController.use(userRoutes);

export {routesController};