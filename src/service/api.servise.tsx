import axios from "axios";

const Api = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.XRapidAPIKey ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};  

export const ApiService = {
  async Feching(url: string) {
    const res = await axios.get(`${Api}/${url}`, options)
    return res.data
  }
}