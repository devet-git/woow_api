import { Router } from 'express'
import userRoutes from './userRoutes.js'
import workRoutes from './workRoutes.js'
import authRoutes from './authRoutes.js'

const APIv1 = new Router()
APIv1.use('/users', userRoutes)
APIv1.use('/works', workRoutes)
APIv1.use('/auth', authRoutes)

export default APIv1
