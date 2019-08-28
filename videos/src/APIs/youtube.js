import axios from 'axios'
const KEY = 'AIzaSyCHkSSy2hv_F6H9zjwOg-qlBUrY__Nwqvs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})