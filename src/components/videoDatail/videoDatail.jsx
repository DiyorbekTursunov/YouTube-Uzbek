import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {ApiService} from '../../service/api.servise'
import moment from "moment";
import Suggested from "../Suggested/Suggested";
const VideoDatail = () => {
    const [VideoDatail , setVideoDatail] = useState([])
    const [SuggestedVideo, setSuggestedVideo] = useState(null)
    const [like, setlike] = useState('text-[#fff]')
    const [comment, setcomment] = useState('text-[#fff]')
    const [sub, setsub] = useState('bg-[#ff0707] text-[#fff]')
    const [line, setline] = useState(2)
  const VideoId = useParams();
  useEffect(() => {
    const getData = async () =>{
        try {
            const data = await ApiService.Feching(`videos?part=snippet,statistics&id=${VideoId.id}`)
            setVideoDatail(data.items )
            const reletedData = await ApiService.Feching(`search?part=snippet&relatedToVideoId=${VideoId.id}&type=video`)
            setSuggestedVideo(reletedData)
        } catch (err) {
            console.log(err);
        }
    }
    getData()
  }, [VideoId.id])
  return (
    <div className="bg-[#121212] w-full">
        <div className="max-w-[1740px] flex mx-auto  pt-6 lg:flex-row  md:flex-col sm:flex-col max-sm:flex-col px-5 justify-evenly">
        {VideoDatail && VideoDatail.map( (e , i) => {
            return(
            <div key={i} className="2xl:w-[1100px] xl:w-[900px] lg:w-[650px]">
                    <iframe
                    className="2xl:w-[1100px] xl:w-[900px] 2xl:h-[600px] xl:h-[500px] lg:w-[650px] lg:h-[400px] md:w-full md:h-[450px] sm:w-full sm:h-[450px] max-sm:w-full max-sm:h-[200px]"
                    src={`https://www.youtube.com/embed/${e.id}`}
                    title="YouTube Uzbek video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen/>
            <div className="max-sm:text-[12px]">
                <h2 className="2xl:text-[18px] max-sm:text-[12px] text-white line-clamp mt-6">{e.snippet.description.slice(0, 150)} ...</h2>
                <hr className="opacity-30 mt-5" />
               <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center  gap-4">
                        <Link to={`/channel/${VideoDatail[0].snippet.channelId}`}>
                            <img src={e.snippet.thumbnails.high.url} alt="" className="w-[60px] h-[60px] rounded-[50%]"/>
                        </Link>
                        <div>
                            <h2 className="text-[18px] text-white">{e.snippet.channelTitle}</h2>
                            <p className="text-[#AAAAAA]">{'subscribers'}</p>
                        </div>
                    </div>
                    <button  className={`${sub}   py-2 rounded-lg px-7`} onClick={() => setsub('bg-[#e2e2e2] text-[#000]')}>Subscribe</button>
               </div>
               <div className="flex gap-3 mt-3 line-clamp-1 max-sm:max-w-[250px]">
               </div>
               <hr className="opacity-30 mt-5" />
               <div className="flex items-center gap-3 mt-4 whitespace-nowrap ">
                       <p className="text-[#AAAAAA]" >{parseInt(e.statistics.viewCount).toLocaleString()} views</p>
                    <p className="text-[#AAAAAA]">{moment(e.snippet.publishedAt).fromNow()}</p>
                    <button onClick={() => setlike('text-[#ff0101]')} className="flex items-center gap-3"><span className="text-[#AAAAAA]">{parseInt(e.statistics.likeCount).toLocaleString()}</span><i className={`fa-sharp fa-solid fa-thumbs-up ${like}`}></i></button>
                    <button onClick={() => setcomment('text-[#AAAAAA]')}><span className="text-[#AAAAAA] flex items-center gap-3" >{parseInt(e.statistics.commentCount).toLocaleString()} <i className={`fa-solid fa-comment ${comment} `}></i></span></button>
               </div>
               <div className="mt-6">
                    <pre className={`2xl:text-[18px] max-sm:text-[12px] text-white text-justify whitespace-pre-wrap line-clamp-${line}`}>{e.snippet.description}</pre>
                    <span className="text-[#AAAAAA]" onClick={() => setline(line === 2 ? 500 : 2)}>Show More</span>
               </div>
            </div>
        </div>)})}
        <div className="flex flex-col items-center gap-4 ">
            <Suggested SuggestedVideo={SuggestedVideo && SuggestedVideo.items}/>
        </div>
    </div>
    </div>
  );
};

export default VideoDatail;