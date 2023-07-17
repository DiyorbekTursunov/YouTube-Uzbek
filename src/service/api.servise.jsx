import axios from "axios";

const Api =  'https://youtube-v31.p.rapidapi.com'
const options = {
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'bfa9cc88d2msh923fbbd020ac09cp176a1ajsn624451e948f2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const ApiService =  {
    async Feching (url) {
        const res = await axios.get(`${Api}/${url}` , options)
        return res.data
    }
}