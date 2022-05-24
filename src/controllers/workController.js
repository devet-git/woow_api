import controller from "../config/controller.js"
import workService from "../services/workService.js"
import { responseFormat } from "../utils/format.js"

const workController = Object.create(controller)

workController.showAll = async (req, res) => {
   try {
      let result = await workService.showAll()
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
workController.show = async (req, res) => {
   let { id } = req.params
   try {
      let reqData = { table: 'works', field: 'id', value: id }
      let result = await workService.show(reqData)
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}

workController.createNew = async (req, res) => {
   try {
      const reqData = req.body
      const result = await workService.createNew(reqData)
      res.status(result.statusCode).json({ ...result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}

workController.update = async (req, res) => {
   let { id } = req.params
   let reqData = { id, ...req.body }
   console.log(reqData);
   try {
      let result = await workService.update(reqData)
      res.json({ status: 200, success: true, data: result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }

}

workController.delete = async (req, res) => {
   let { id } = req.params
   try {
      let result = await workService.deleteOne(id)
      res.json({ status: 200, success: true, data: result })
   } catch (error) {
      res.status(500).json(responseFormat.error(500))
   }
}
export default workController
