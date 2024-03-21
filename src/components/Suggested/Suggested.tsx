import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

interface SuggestedVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
  };
}

interface SuggestedProps {
  SuggestedVideo: SuggestedVideoItem[] | null;
}

const Suggested: React.FC<SuggestedProps> = ({ SuggestedVideo }) => {
  return (
    <>
      {SuggestedVideo &&
        SuggestedVideo.map((video: SuggestedVideoItem) => {
          return (
            <div
              className="cursor-pointer flex sm:items-center max-sm:items-start md:flex-row sm:flex-col max-sm:flex-col flex-col justify-center gap-[20px] max-w-[400px]  px-3 py-2 rounded-2xl"
              key={video.id.videoId}
            >
              <Link to={`/video/${video.id.videoId}`}>
                <div>
                  <img
                    src={video.snippet.thumbnails?.high?.url || ''}
                    alt="Video img"
                    className="rounded-[10px] truncate w-[328px] h-[100px] object-cover sm:h-[] max-sm:h-[220px]"
                  />
                </div>
              </Link>
              <div className="2xl:w-[368px] lg:w-[300px] overflow-hidden">
                <Link to={`/video/${video.id.videoId}`}>
                  <h2 className="text-[14px] text-white font-medium lg:line-clamp-2 max-lg:line-clamp-1 ">
                    {video.snippet.title}...
                  </h2>
                </Link>
                <div className="flex items-start">
                  <div>
                    <p className="mt-2 text-[#AAAAAA]">
                      {video.snippet.channelTitle}
                    </p>
                    <p className="text-[#AAAAAA]">
                      {moment(video.snippet.publishedAt).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Suggested;
