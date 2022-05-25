import { Router } from "express"
import userController from "../../controllers/userController.js"
import authMiddleware from "../../middlewares/authMiddleware.js"

const userRoutes = new Router();

userRoutes.route('/')
   .get(userController.showAll)
   .post(userController.createNew)
userRoutes.route('/:id')
   .get(userController.show)
   .put(userController.update)
   .delete(userController.detele)
userRoutes.route('/account')
   .post(authMiddleware.isSignIn, userController.account)
userRoutes.put('/account/password', authMiddleware.isSignIn, userController.changePassword)

export default userRoutes
