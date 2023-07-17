import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ApiService } from '../../service/api.servise'
import Video from '../video/Video'
const Search = () => {
  const [videos , setvideos] = useState(null)
  const {id} = useParams()
  useEffect(() => {
    const getData = async ()=>{
      try{
        const data = await ApiService.Feching(`search?part=snippet&q=${id}`)
        setvideos(data.items)
      }catch(error){
        console.log(error);
      }
    }
    getData()
  }, [id])
  return (
    <div className='bg-[#121212] w-full'>
      <div className='max-w-[1440px] mx-auto '>
          <Video videos={videos}/>
    </div>
    </div>
  )
} 
export default Search