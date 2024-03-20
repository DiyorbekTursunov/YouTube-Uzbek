import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

interface VideoData {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet?: {
    thumbnails?: {
      high?: {
        url?: string;
      };
    };
    description?: string;
    channelId?: string;
    channelTitle?: string;
    publishedAt?: string;
  };
}

interface ChannelProps {
  video: VideoData;
}

const Channel: React.FC<ChannelProps> = ({ video }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 cursor-pointer bg-black rounded-lg' >
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <img src={video.snippet?.thumbnails?.high?.url} alt="Channel image" className='rounded-[50%] w-[180px] h-[180px]'/>
      </Link>
      <div className="flex flex-col items-center gap-2">
        <h2 className='text-white'>{video.snippet?.channelTitle}</h2>
        <p className="text-[#AAAAAA]">Created channel: {video.snippet?.publishedAt ? moment(video.snippet.publishedAt).fromNow() : ''}</p>
      </div>
    </div>
  );
};

export default Channel;
