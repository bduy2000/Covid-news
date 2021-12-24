import Parser from 'rss-parser'
import News from '../models/news.js'

const vnExpress = async () => {
    const parser = new Parser()
    
    let news = await parser.parseURL(`https://vnexpress.net/rss/tin-moi-nhat.rss`)
    news.items.forEach(async (feed) => {
        let reg = /covid|vaccine|dịch/gi
        if(reg.test(feed.contentSnippet.toString())){
            const findBylink = await News.findOne({
            link: feed.link
        })
        if(!findBylink){
            let reg = /<img.*?src="(.*?)"[^>]+>/g
            let getlink = reg.exec(feed.content.toString())
            
             let data ={ 
                link: feed.link,
                title: feed.title,
                image: getlink ? getlink[1] : 'https://ats.com.vn/wp-content/themes/brixel/images/No-Image-Found-400x264.png',
                description: feed.contentSnippet,
                date: feed.isoDate,
                category: 'https://s1.vnecdn.net/vnexpress/restruct/i/v495/v2_2019/pc/graphics/logo.svg'
            } 
            await News.create(data) 
          
        } 
        }

        
    });
}
export default vnExpress