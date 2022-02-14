import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticationController } from './controllers/AuthenticationController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListComplimentsReceiveController } from './controllers/ListComplimentsReceiveController';
import { ListComplimentsSenderController } from './controllers/ListComplimentsSenderController';
import { ListTagController } from './controllers/ListTagController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationController = new AuthenticationController();
const createComplimentController = new CreateComplimentController();
const listComplimentsReceiveController = new ListComplimentsReceiveController();
const listComplimentsSenderController = new ListComplimentsSenderController();
const listTagController = new ListTagController();


router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticationController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("users/compliments/send", ensureAuthenticated, listComplimentsSenderController.handle)
router.get("users/compliments/receive", ensureAuthenticated, listComplimentsReceiveController.handle)
router.get("/tags", ensureAuthenticated, listTagController.handle);

export { router }; 