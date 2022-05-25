import workService from "../services/workService.js"
import { responseFormat } from "../utils/format.js"

const workController = {
   async showAll(req, res) {
      try {
         let result = await workService.showAll()
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async showValid(req, res) {
      try {
         let result = await workService.showValid(req.userId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async register(req, res) {
      try {
         const { workId } = req.body
         const { userId } = req
         const result = await workService.userRegister(userId, workId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async approve(req, res) {
      try {
         const { workId } = req.body
         const { userId } = req
         const result = await workService.approve(workId, userId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },
   async refuse(req, res) {
      try {
         const { workId } = req.body
         const { userId } = req
         const result = await workService.refuse(workId, userId)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async show(req, res) {
      let { id } = req.params
      try {
         let reqData = { table: 'works', field: 'id', value: id }
         let result = await workService.show(reqData)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async createNew(req, res) {
      try {
         const reqData = req.body
         const result = await workService.createNew(reqData)
         res.status(result.statusCode).json({ ...result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   },

   async update(req, res) {
      let { id } = req.params
      let reqData = { id, ...req.body }
      console.log(reqData);
      try {
         let result = await workService.update(reqData)
         res.json({ status: 200, success: true, data: result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }

   },

   async delete(req, res) {
      let { id } = req.params
      try {
         let result = await workService.deleteOne(id)
         res.json({ status: 200, success: true, data: result })
      } catch (error) {
         res.status(500).json(responseFormat.error(500))
      }
   }
}
export default workController 