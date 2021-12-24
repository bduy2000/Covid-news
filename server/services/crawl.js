import Parser from 'rss-parser'
import thanhNien from './thanhnien.js'
import vnExpress from './vnexpress.js'
const crawNews = async () => {
    thanhNien()
    vnExpress()
}
export default crawNews