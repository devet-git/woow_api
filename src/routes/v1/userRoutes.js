import { Router } from "express"
import userController from "../../controllers/userController.js"


const userRoutes = new Router();

userRoutes.route('/')
   .get(userController.show)
   .post(userController.store)
userRoutes.route('/:id')
   .get(userController.show)
   .put(userController.update)
   .delete(userController.detroy)

export default userRoutes