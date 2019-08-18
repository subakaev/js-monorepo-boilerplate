import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

export default (): express.Application => {
  const app = express();

  app.use(bodyParser.json());

  app.get('/', (req: Request, res: Response): Response => res.send('Hello World!'));

  app.post('/test', (req: Request, res: Response): Response => res.json({ success: true }));

  return app;
};
