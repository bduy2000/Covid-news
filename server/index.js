import  express  from 'express';
import routes from './routes/index.js'
import mongoose from './models/mongoose.js'
import crawlNews from './services/crawl.js';
import { wakeDynos } from 'heroku-keep-awake'
import cors from 'cors'
const app  = express()
const PORT = process.env.PORT || 5000;

const DYNO_URLS = [
  'https://covidnew-api.herokuapp.com/',
  'https://covidnews-client.herokuapp.com/',
]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
      name: 'VNExpress Covid-19 news API v1',
    })
  })

app.use('/api',routes);

mongoose.connect().then(
  crawlNews()
).catch(console.error)

app.listen(PORT, () => {
  wakeDynos(DYNO_URLS);
  console.log(`Server listening on port: ${PORT}`)
})

setInterval(function () {
  crawlNews().catch(console.error)
}, 15 * 60 * 1000)
 
    
  
  
  


