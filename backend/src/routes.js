import { Router } from 'express';

const routes = new Router();

routes.get('/hello', (req, res) => {
  return res.json({ hello: 'hello world' });
});

export default routes;
