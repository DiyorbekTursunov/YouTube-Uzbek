import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.servise'
import Video from '../video/Video'
const ChannelDetail = () => {
  const [sub, setsub] = useState('bg-[#ff0707] text-[#fff]')
    const [ChannelDetail, setChannelDetail] = useState(null)
    const [ChannelVideo, setChannelVideo] = useState(null)
    const [banner, setbanner] = useState(null)
    const channelId = useParams()
    useEffect(() => {
        const getData = async () =>{
          try {
            const data = await ApiService.Feching(`channels?part=snippet&id=${channelId.id}`)
            setChannelDetail(data.items[0])
            setbanner(data.items[0].brandingSettings.image.bannerExternalUrl === undefined || null ? '': data.items[0].brandingSettings.image.bannerExternalUrl)
            const dataVideo = await ApiService.Feching(`search?channelId=${channelId.id}&part=snippet`)
            setChannelVideo(dataVideo.items)
          } catch (error) {
            console.log(error);
          }
        }
        getData()
    }, [channelId])
  return (
    <div className='w-full bg-[#303030]'>
      <div className='max-w-[1440px] mx-auto pt-[30px]'>
        <div className='text-center'>
          <img src={banner} alt="" className='w-[100%] sm:h-[250px] max-sm:h-[60px]  object-cover overflow-hidden'/>
        </div>
        <hr className="opacity-30 my-10" />
      <div className='flex justify-between mt-[16px] sm:flex-row max-sm:flex-col max-sm:items-center gap-3'>
        <div className='flex items-center sm:flex-row max-sm:flex-col gap-4 '>
            <img src={ChannelDetail && ChannelDetail.snippet.thumbnails.high.url} alt="Channel image" className='rounded-[50%] w-[100px] h-[100px]' />
            <div className='text-white sm:text-start max-sm:text-center'>
              <h2>{ChannelDetail && ChannelDetail.brandingSettings.channel.title}</h2>
              <p>{parseInt(ChannelDetail && ChannelDetail.statistics.subscriberCount).toLocaleString()} subscribers</p>
            </div>
        </div>
        <div className='flex items-center justify-between'>
        <button  className={`${sub}   py-2 rounded-lg px-7`} onClick={() => setsub('bg-[#e2e2e2] text-[#000]')}>Subscribe</button>
        </div>
      </div>
    </div>
    <div>
      <div className='max-w-[1440px] mx-auto mt-[100px]'>
        <Video videos={ChannelVideo}/>
      </div>
    </div>
    </div>
  )
}

export default ChannelDetail

