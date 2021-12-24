import express from 'express'
import NewsController from '../controllers/news.js'

const router = express.Router()

router.route('/').get(NewsController.getNews)


export default router