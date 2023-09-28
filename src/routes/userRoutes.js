import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir.
// router.get('/', userController.index); // Lista Usuarios.
// router.get('/:id', userController.show); // Lista Usuario.

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index - lista todos os usuario. -> GET
store/create - cria um novo usuario. -> POST
delete - apaga um usuario -> DELETE
show - que mostra um usuario -> GET
update - atualiza um usuario. -> PATCH ou PUT
*/
