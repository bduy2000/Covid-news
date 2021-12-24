import axios from './axiosClient'
 const newsApi ={
        getnewsfeed:(params) =>{
        const url = '/news'
        return axios.get(url, { params })
        }
 }

 export default newsApi