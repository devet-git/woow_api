import userService from "../services/userService.js"
import controller from "../config/controller.js"
import { responseFormat } from "../utils/format.js"

const userController = Object.create(controller)

userController.showAll = async (req, res) => {
   try {
      let result = await userService.showAll()
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
userController.show = async (req, res) => {
   try {
      let { id } = req.params
      let result = await userService.show({ table: 'works', field: 'id', value: id })
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}

userController.createNew = async (req, res) => {
   try {
      let result = await userService.createNew(req.body)
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}

userController.update = async (req, res) => {
   let { username, phoneNum, email } = req.body
   let { id } = req.params
   try {
      username && await userModel.update(id, 'username', username)
      email && await userModel.update(id, 'email', email)
      phoneNum && await userModel.update(id, 'phone_num', phoneNum)
      res.json({
         status: 200, success: true,
         data: `Updated data of user with ID: ${id}`
      })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }

}

userController.detele = async (req, res) => {
   let { id } = req.params
   try {
      await userModel.detele(id)
      res.json({
         status: 200, success: true,
         data: `Deleted user with ID: ${id}`
      })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
export default userController
