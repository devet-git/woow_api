import { Router } from "express"
import userController from "../../controllers/userController.js"
import { authMiddleware } from "../../middlewares/authMiddleware.js"

const userRoutes = new Router();

userRoutes.route('/')
   .get(authMiddleware, userController.showAll)
   .post(userController.createNew)
userRoutes.route('/:id')
   .get(userController.show)
   .put(userController.update)
   .delete(userController.detele)
// userRoutes.route('/:id/works')
//    .get(userController.show)
//    .put(userController.update)
//    .delete(userController.detroy)

export default userRoutes
