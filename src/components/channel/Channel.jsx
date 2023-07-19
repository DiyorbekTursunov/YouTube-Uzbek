import moment from "moment/moment";
import { Link } from "react-router-dom";

const Channel = ({video}) => {
  return (
    <div className='flex flex-col justify-center gap-5 cursor-pointer'>
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <img src={video.snippet.thumbnails.high.url} alt="Channel image" className='rounded-[50%] w-[180px] h-[180px]'/>
      </Link>
      <div>
        <h2 className='text-white'>{video.snippet.channelTitle}</h2>
        <p className="text-[#AAAAAA]">Created channel: {moment(video.snippet.publishedAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default Channel