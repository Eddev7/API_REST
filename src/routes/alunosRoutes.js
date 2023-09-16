import { Router } from 'express';
import alunosControllers from '../controllers/AlunosControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunosControllers.index);
router.post('/', loginRequired, alunosControllers.store);
router.put('/:id', loginRequired, alunosControllers.update);
router.get('/:id', alunosControllers.show);
router.delete('/:id', loginRequired, alunosControllers.delete);
export default router;
