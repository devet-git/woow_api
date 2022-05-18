import { Router } from 'express'
import userRoutes from './userRoutes.js'

const APIv1 = new Router()
APIv1.use('/users', userRoutes)

export default APIv1