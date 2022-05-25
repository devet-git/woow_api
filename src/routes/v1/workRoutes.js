import { Router } from "express"
import workController from "../../controllers/workController.js"
import workValidation from "../../validations/workValidation.js"
import authMiddleware from "../../middlewares/authMiddleware.js";
const workRoutes = new Router();

workRoutes.route('/')
   .get(workController.showAll)
   .post(authMiddleware.isSignIn, workValidation.createNew, workController.createNew)

workRoutes.get('/valid', authMiddleware.isSignIn, workController.showValid)
workRoutes.post('/resgister', authMiddleware.isSignIn, workController.register)
workRoutes.post('/approve', authMiddleware.isSignIn, workController.approve)
workRoutes.post('/refuse', authMiddleware.isSignIn, workController.refuse)

workRoutes.route('/:id')
   .get(workController.show)
   .put(workValidation.update, workController.update)
   .delete(workController.delete)
export default workRoutes
