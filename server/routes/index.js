import express from 'express'
import NewsRoute from './news.js'
const router = express.Router()

router.use('/news',NewsRoute)

export default router