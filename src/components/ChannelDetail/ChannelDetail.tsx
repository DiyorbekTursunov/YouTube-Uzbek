import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bannerImg from '../images/banner.png'
import Video from '../video/Video'
import ApiService  from '../../service/api.servise'


//types
import { channelDetailType, channelVideoType } from 'types' 



export const ChannelDetail: React.FC = () => {
  const [sub, setSub] = useState<string>('bg-[#ff0707] text-[#fff]');
  const [channelDetail, setChannelDetail] = useState<channelDetailType | null>(null);
  const [channelVideo, setChannelVideo] = useState<channelVideoType[]>([]);
  const [banner, setBanner] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  const { id } = useParams<{ id: string }>();



  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const data = await ApiService.Feching(`channels?part=snippet&id=${id}`);
        setChannelDetail(data.items[0]);
        setBanner(data.items[0].brandingSettings.image.bannerExternalUrl || 'DefBanner');
        const dataVideo = await ApiService.Feching(`search?channelId=${id}&part=snippet`);
        setChannelVideo(dataVideo.items);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getData();
  }, [id]);


  return (
    <div className='w-full bg-[#303030]'>
      {loading && <div className="bg-slate-950 absolute w-full h-full top-0 left-0 opacity-90 z-50 flex justify-center items-center">
        <div role="status">
          <svg aria-hidden="true" className="w-28 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
      <div className='max-w-[1440px] mx-auto pt-[30px]'>
        <div className='text-center'>
          <img src={banner || bannerImg} alt="" className='w-[100%] sm:h-[250px] max-sm:h-[60px]  object-cover overflow-hidden' />
        </div>
        <hr className="opacity-30 my-10" />
        <div className='flex justify-between mt-[16px] sm:flex-row max-sm:flex-col max-sm:items-center gap-3'>
          <div className='flex items-center sm:flex-row max-sm:flex-col gap-4 '>
            <img src={channelDetail?.snippet.thumbnails.high.url} alt="Channel image" className='rounded-[50%] w-[100px] h-[100px]' />
            <div className='text-white sm:text-start max-sm:text-center'>
              <h2>{channelDetail?.brandingSettings.channel.title}</h2>
              <p>{channelDetail?.statistics?.subscriberCount ? parseInt(channelDetail?.statistics.subscriberCount).toLocaleString() : '0'} subscribers</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button className={`${sub}   py-2 rounded-lg px-7`} onClick={() => setSub('bg-[#e2e2e2] text-[#000]')}>Subscribe</button>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-[1440px] mx-auto mt-[100px]'>
          <Video channelVideo={channelVideo || []} />
        </div>
      </div>

    </div>
  )
}
