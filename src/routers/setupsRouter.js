import { Router } from 'express';
import setupsCtr from '../controllers/setupsController';

const router = Router();

router
  .get('/all', setupsCtr.allSetup);

router
  .get('/all/babel', setupsCtr.allBabel);

export default router;
