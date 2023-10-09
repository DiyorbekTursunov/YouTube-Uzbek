import axios from "axios";

const Api =  'https://youtube-v31.p.rapidapi.com'
const options = {
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '579de46de1msh0a167fffbb4bd68p1a21aejsn24084b936f1c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService =  {
    async Feching (url) {
        const res = await axios.get(`${Api}/${url}` , options)
        return res.data
    }
}