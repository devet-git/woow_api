import controller from "../config/controller.js"
import workService from "../services/workService.js"

const workController = Object.create(controller)

workController.showAll = async (req, res) => {
   try {
      let resData = await workService.showAll()
      res.json({ status: 200, success: true, data: resData })
   } catch (error) {
      res.status(500).json({ status: 500, success: false })
   }
}
workController.show = async (req, res) => {
   let { id } = req.params
   try {
      let reqData = { table: 'works', field: 'id', value: id }
      let resData = await workService.show(reqData)
      res.json({ status: 200, success: true, data: resData })
   } catch (error) {
      res.status(500).json({ status: 500, success: false })
   }
}

workController.createNew = async (req, res) => {
   try {
      const reqData = req.body
      const resData = await workService.createNew(reqData)
      res.json({ status: 200, success: true, data: resData })
   } catch (error) {
      res.status(500).json({ errors: new Error(error).message })
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
      res.status(500).json({ status: 500, success: false })
   }

}

workController.delete = async (req, res) => {
   let { id } = req.params
   try {
      let result = await workService.deleteOne(id)
      res.json({ status: 200, success: true, data: result })
   } catch (error) {
      res.status(500).json({ status: 500, success: false })
   }
}
export default workController
