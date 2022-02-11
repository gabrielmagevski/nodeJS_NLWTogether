import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticationController } from './controllers/AuthenticationController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationController = new AuthenticationController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticationController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };