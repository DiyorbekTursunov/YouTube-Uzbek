import React, { Fragment } from "react";

const VideoTags = ({ tag }) => {
  return (
    <>
      {tag &&
        tag.map((item, i) => {
          return (
            <Fragment key={i}>
              <a href="#" className="text-[#AAA]">
                #{item}
              </a>
            </Fragment>
          );
        })}
    </>
  );
};

export default VideoTags;
