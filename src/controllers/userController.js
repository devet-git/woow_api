import userModel from "../models/userModel.js"

import controller from "../config/controller.js"

const userController = Object.create(controller)
userController.show = async (req, res) => {
   // userModel.get().then(data => res.json(data))
   let { id } = req.params
   id ? res.json(await userModel.select(id)) : res.json(await userModel.select())
}

userController.store = async (req, res) => {
   let { title } = req.body
   res.json(await userModel.insert(title))
}

userController.update = async (req, res) => {
   let { title } = req.body
   let { id } = req.params
   res.json(await userModel.update(id, title))
}

userController.detroy = async (req, res) => {
   let { id } = req.params
   res.json(await userModel.detele(id))
}
export default userController