import React, { Fragment } from "react";
import VideoCard from "../videoCard/videoCard";
import Channel from "../channel/Channel";

const Video = ({ videos }) => {
  return (
    <div className="grid 2xl:grid-cols-16 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 px-5">
      {videos &&
        videos.map((video, i) => {
          return (
            <Fragment key={i}>
              {video.id.videoId && (
                <VideoCard video={video} key={video.id.videoId} />
              )}
              {video.id.channelId && (
                <Channel video={video} key={video.id.channelId} />
              )}
            </Fragment>
          );
        })}
    </div>
  );
};

export default Video;
