import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

//type 
import { VideoDataType } from "types";




const VideoCard: React.FC<{ video: VideoDataType }> = ({ video }) => {
    
  return (
    <div className=" px-3 py-2 rounded-lg  ">
      {video.id.videoId && (
        <Link to={`/video/${video.id.videoId}`} className=" bg-slate-300">
          <div className=" bg-slate-400 sm:w-[400px] sm:h-[222px] rounded-[10px]">
            <img
              src={video.snippet?.thumbnails?.high?.url || ""}
              alt="Video image"
              width={100}    
              height={100}         
              fetchPriority="high" 
              loading="lazy"
              className="rounded-[10px] w-full h-full object-cover cursor-pointer"
            />
          </div>
        </Link>)}

      <div className="sm:max-w-[300px] max-sm:w-[250px]">
        <Link to={`/video/${video.id.videoId}`}>
          <h2 className="text-[1rem]  text-white font-medium line-clamp-2 cursor-pointer pt-2">
            {video.snippet?.title || ""}
          </h2>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <div className="flex items-start gap-4 pt-2">
            
            <div>
              <p className="text-[#AAAAAA]">{video.snippet?.channelTitle || ""}</p>
              <p className="text-[#AAAAAA]">
                {moment(video.snippet?.publishedAt).fromNow() || ""}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
