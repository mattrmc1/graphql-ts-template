import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: 'Hooray' });
})

// Include RESTful here...
router.get('/example/:id', (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: 'Example Endpoint', id: req.params.id });
})

export default router;