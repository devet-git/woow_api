import { Router } from "express"
import userController from "../controllers/userController.js";
const userRouter = new Router();

userRouter
   .get('/', userController.show)
   .get('/:id', userController.show)
   .post('/', userController.store)
   .put('/:id', userController.update)
   .delete('/:id', userController.detroy)

export default userRouter