import { Fragment } from "react";
import VideoCard from "../videoCard/videoCard";

//types
import { channelVideoType } from "types";




const Video: React.FC<{channelVideo: channelVideoType[]}> = ({ channelVideo }) => {
  console.log(channelVideo);
  
  return (
      <div className="flex flex-wrap justify-center">
        {channelVideo &&
          channelVideo.map((video, i) => (
            <Fragment key={i}>
              {video.id.videoId && (
                <VideoCard video={video} key={video.id.videoId} />
              )}
            </Fragment>
          ))}
      </div>
  );
};

export default Video;
