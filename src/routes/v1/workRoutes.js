import { Router } from "express"
import workController from "../../controllers/workController.js"
import workValidation from "../../validations/workValidation.js"
import { authMiddleware } from "../../middlewares/authMiddleware.js";
const workRoutes = new Router();

workRoutes.route('/')
   .get(authMiddleware, workController.showAll)
   .post(workValidation.createNew, workController.createNew)
workRoutes.route('/:id')
   .get(workController.show)
   .put(workValidation.update, workController.update)
   .delete(workController.delete)
export default workRoutes
