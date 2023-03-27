import {Router} from 'express';

//CONTROLLERS
//Importando homeController
import * as HomeController from '../controllers/homeController';
//Importando instController
import * as InstController from '../controllers/instController';
//Importanto userController
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/sobre', InstController.sobre);

router.get('/contato', InstController.contato);

//métodos GET e POST para mesmo endpoint
router.get('/userForm', UserController.userForm);

router.post('/userAction', UserController.userAction);

export default router;