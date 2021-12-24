import Parser from 'rss-parser'
import News from '../models/news.js'

const thanhNien = async () => {
    try {
        const parser = new Parser({ 
            xml2js: {
                emptyTag: '',
                trim: true,
                normalize: true,
                includeWhiteChars: true
              }
             
        })
        let news = await parser.parseURL('https://thanhnien.vn/rss/home.rss')
        news.items.forEach(async (feed) => {
            let req = /.+[^\n]/g
            let context = feed.contentSnippet.match(req)
            let reg = /covid|vaccine|dịch/gi

            if (reg.test(context[0])) {
                const findBylink = await News.findOne({
                    link: feed.link
                })
                if(!findBylink){
                    let reg = /<img.*?src="(.*?)"[^>]+>/g
                let getlink = reg.exec(feed.content.toString())
                
                 let data ={ 
                    link: feed.link,
                    title: feed.title,
                    image: getlink ? getlink[1].replace('80x80','660x370') : 'https://ats.com.vn/wp-content/themes/brixel/images/No-Image-Found-400x264.png',
                    description: context[0],
                    date: feed.isoDate,
                    category: 'https://static.thanhnien.vn/v4/web/styles/img/TNO_slogo.svg'
                } 
                await News.create(data)
                }
                 
            }
        });
    } catch (error) {
        console.log(error);
    }  
        
}

export default thanhNien


