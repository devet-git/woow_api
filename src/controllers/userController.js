import userModel from "../models/userModel.js"
import controller from "../config/controller.js"

const userController = Object.create(controller)

userController.index = async (req, res) => {
   try {
      let [data] = await userModel.getAll()
      res.json({ status: 200, success: true, data })
   } catch (error) {
      res.json({ success: false })
   }
}
userController.show = async (req, res) => {
   let { id } = req.params
   try {
      let [data] = await userModel.get(id)
      res.json({ status: 200, success: true, data })
   } catch (error) {
      res.json({ status: 400, success: false })
   }
}

userController.store = async (req, res) => {
   let { username, phoneNum, email } = req.body
   console.log(username, phoneNum, email);
   try {
      await userModel.insert(username, phoneNum, email)
      res.json({ status: 200, success: true, data: "1 user added to database" })
   } catch (error) {
      res.json({ status: 400, success: false })
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
      res.status(400).json({ status: 400, success: false })
   }

}

userController.detroy = async (req, res) => {
   let { id } = req.params
   try {
      await userModel.detele(id)
      res.json({
         status: 200, success: true,
         data: `Deleted user with ID: ${id}`
      })
   } catch (error) {
      res.json({ success: false })
   }
}
export default userController
