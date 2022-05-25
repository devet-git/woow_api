import userService from "../services/userService.js"
import { responseFormat } from "../utils/format.js"


const userController = {
   async showAll(req, res) {
      try {
         let result = await userService.showAll()
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async show(req, res) {
      try {
         let { id } = req.params
         let result = await userService.show({ table: 'works', field: 'id', value: id })
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async createNew(req, res) {
      try {
         let result = await userService.createNew(req.body)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async update(req, res) {
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

   },
   async changePassword(req, res) {
      let { userId } = req
      try {
         let result = await userService.changePassword(userId, req.body)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }

   },

   async detele(req, res) {
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
   },
   async account(req, res) {
      try {
         // console.log(req);
         let result = await userService.account(req.userId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },


}
export default userController
