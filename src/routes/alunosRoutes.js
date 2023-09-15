import { Router } from 'express';
import alunosControllers from '../controllers/AlunosControllers';

const router = new Router();

router.get('/', alunosControllers.index);
router.post('/', alunosControllers.store);
export default router;
