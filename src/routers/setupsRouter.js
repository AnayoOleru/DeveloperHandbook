import { Router } from 'express';
import setupsCtr from '../controllers/setupsController';

const router = Router();

router
  .get('/all', setupsCtr.allSetup);

export default router;
