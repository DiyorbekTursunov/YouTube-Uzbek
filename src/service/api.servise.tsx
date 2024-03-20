import axios from "axios";

const Api = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': "f5ebe04355mshc9d180d75ae0332p1481bejsn6653f17965aa" ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};  

export const ApiService = {
  async Feching(url: string) {
    const res = await axios.get(`${Api}/${url}`, options)
    return res.data
  }
}