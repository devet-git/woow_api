import { Router } from "express";

const notFoundRouter = new Router()
const handle = (req, res) => {
   res.status(404).json({
      status: 404, success: false,
      data: {
         error: "Not Found",
         Doc: "https://github.com/devet-git/woow_api/blob/main/README.md"
      }
   })
}
notFoundRouter.route('*')
   .get(handle)
   .post(handle)
   .put(handle)
   .delete(handle)

export default notFoundRouter
