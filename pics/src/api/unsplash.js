import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 673ce3b566d159b423a40123e8394404b104948fc5eaf08b8095ef8da47d8320'
    }
})