import { Router } from 'express'
import userRoutes from './userRoutes.js'
import workRoutes from './workRoutes.js'
const APIv1 = new Router()
APIv1.use('/users', userRoutes)
APIv1.use('/works', workRoutes)

export default APIv1
