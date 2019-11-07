import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import AdminController from './app/controllers/AdminController';
import SubjectController from './app/controllers/SubjectController';
import CommentController from './app/controllers/CommentController';
import ContentController from './app/controllers/ContentController';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/admins', AdminController.store);
routes.delete('/users/:id', UserController.delete);
routes.post('/subjects', SubjectController.store);
routes.post('/comments', CommentController.store);
routes.post('/contents', ContentController.store);
routes.put('/contents/:id', ContentController.update);
routes.delete('/contents/:id', ContentController.delete);
routes.post('/comments/:id', CommentController.store);

export default routes;
