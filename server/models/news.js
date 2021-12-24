import mongoose from 'mongoose';
const { Schema } = mongoose;

const newsSchema  = new Schema({
    title: String,
    link: String,
    image: String,
    content: String,
    description: String,
    category: String,
    date: Date,
    
  },
  {
    timestamp: true,
  }
);

const News = mongoose.model('News', newsSchema)

export default News