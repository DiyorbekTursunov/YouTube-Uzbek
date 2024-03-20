import React from "react";
import { Fragment } from "react";
import VideoCard from "../videoCard/videoCard";

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

interface VideoProps {
  videos: VideoData[]; 
}

const Video: React.FC<VideoProps> = ({ videos }) => {

  return (
      <div className="flex flex-wrap justify-center">
        {videos &&
          videos.map((video, i) => (
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
