import { Router } from 'express';
import codesCtr from '../controllers/codesController';

const router = Router();

router
  .get('/all', codesCtr.allCodes);

export default router;
