import moment from "moment/moment";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
  return (
    <div className="bg-black px-3 py-2 rounded-lg h-[400px] ">
      <Link to={`/video/${video.id.videoId}`}  className="sm:w-[300px] max-sm:max-w-[250px] bg-slate-300">
        <div className="w-full bg-slate-400 rounded-[10px]">
          <img
            src={video.snippet.thumbnails.high.url}
            alt="Video image"
            className="rounded-[10px] w-full h-full truncate cursor-pointer"
          />
        </div>
      </Link>
      <div className="sm:max-w-[300px] max-sm:w-[250px]">
        <Link to={`/video/${video.id.videoId}`}>
          <h2 className="text-[14px] text-white font-medium line-clamp-2 cursor-pointer">
            {video.snippet.description}
          </h2>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <div className="flex items-start gap-4 pt-2">
            <div className="w-[40px] h-[40px] ">
              <img
                src={video.snippet.thumbnails.high.url}
                alt=""
                className="w-full h-full rounded-[50%] "
              />
            </div>
            <div>
              <p className=" text-[#AAAAAA]">{video.snippet.channelTitle}</p>
              <p className="text-[#AAAAAA]">
                {moment(video.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;