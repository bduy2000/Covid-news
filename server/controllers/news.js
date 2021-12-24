import newsModel from '../models/news.js';


export default class NewsController {
    static async getNews(req, res, next) {
        
        try{
            const size = req.query.size ? Number(req.query.size) : 10
        const skip = req.query.page ? Number(req.query.page) : 0
            const data = await newsModel.find()
            .limit(size)
            .skip(size * skip)
            .sort({ date: -1 });
            res.status(200).json(data)
        }catch(err){
            next(err)
        }
    }
}

