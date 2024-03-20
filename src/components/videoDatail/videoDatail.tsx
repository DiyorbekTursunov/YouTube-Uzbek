import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Suggested from "../Suggested/Suggested";
import { ApiService } from "../../service/api.servise";

interface VideoSnippet {
  description: string,
  title: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  channelId: string;
  channelTitle: string;
  publishedAt: string;
}

interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
}

interface VideoItem {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
}





 export const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<VideoItem[]>([]);
  const [suggestedVideo, setSuggestedVideo] = useState<any | null>(null);
  const [like, setLike] = useState<string>("text-[#fff]");
  const [line, setLine] = useState<number>(0);
  const [loading, setloading] = useState(false)

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      setloading(true)
      try {
        const data = await ApiService.Feching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items);
        await data.items.forEach((element: any) => {
          console.log(element);

          document.title = element.snippet.title
        });
        const relatedData = await ApiService.Feching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setSuggestedVideo(relatedData);
        setloading(false)
      } catch (err) {
        setloading(false)
      }
    };
    getData();
  }, [id]);

  return (
    <div className="bg-[#121212] w-full">
      {loading && <div className="bg-slate-950 absolute w-full h-full top-0 left-0 opacity-90 z-50 flex justify-center items-center">
<div role="status">
    <svg aria-hidden="true" className="w-28 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
</div>}
      <div className=" flex max-w-[1800px] gap-10 mx-auto  pt-6 lg:flex-row  md:flex-col sm:flex-col max-sm:flex-col px-5">
        {videoDetail.map((e, i) => (
          <div key={i} className="w-[98%]">
            <iframe
              className="w-[100%] h-[28%]"
              src={`https://www.youtube.com/embed/${e.id}`}
              title="YouTube Uzbek video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="max-sm:text-[12px]">
              <h2 className="2xl:text-[18px] max-sm:text-[12px] text-#f1f1f1 line-clamp mt-6 text-[#fff]">
                {e.snippet.title}
              </h2>
              <div className="flex items-center w-full max-sm:flex-col justify-between gap-5 pr-5 mt-5">
                <div className="flex items-center  gap-4">
                  <div className="flex items-center  gap-4">
                    <Link to={`/channel/${e.snippet.channelId}`}>
                      <svg width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z" fill="#4A5699" /><path d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z" fill="#C45FA0" /><path d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z" fill="#E5594F" /></svg>
                    </Link>
                    <div>
                      <h2 className="text-[18px] text-[#f1f1f1]">
                        {e.snippet.channelTitle}
                      </h2>
                      <p className="text-[#AAAAAA]">{parseInt(e.statistics.viewCount).toLocaleString()} views</p>
                    </div>
                  </div>
                  <button
                    className={`py-2 bg-[#f2f2f2] rounded-3xl px-7`}
                    onClick={() => ""}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex gap-7">
                  <button
                    onClick={() => setLike("text-[#ff0101]")}
                    className="flex items-center   rounded-3xl bg-[#ffffff0a]  h-12  pr-6 "
                  >
                    <div className=" flex items-center   hover:opacity-65">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270" width="62" height="62" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}><defs><clipPath id="__lottie_element_43"><rect width="270" height="270" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_45"><path d="M0,0 L120,0 L120,120 L0,120z"></path></clipPath><clipPath id="__lottie_element_59"><path d="M0,0 L128,0 L128,128 L0,128z"></path></clipPath></defs><g clipPath="url(#__lottie_element_43)"><g clipPath="url(#__lottie_element_59)" transform="matrix(2.7880001068115234,0,0,2.7880001068115234,-48.0780029296875,-51.58800506591797)" opacity="1" style={{ display: "block" }}><g transform="matrix(0.4056888222694397,0.10870399326086044,-0.10870399326086044,0.4056888222694397,63.819969177246094,55.32201385498047)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,78,69)" strokeOpacity="1" strokeWidth="5" d="M0 0"></path></g></g><g transform="matrix(0.6260144710540771,0.13306348025798798,-0.13306348025798798,0.6260144710540771,63.75,70.5)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(195,252,193)" strokeOpacity="1" strokeWidth="3" d="M0 0"></path></g></g><g style={{ display: "none" }}><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g></g><g transform="matrix(0.6156615018844604,0.7880107760429382,-0.7880107760429382,0.6156615018844604,60.8013916015625,70.60517120361328)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(195,252,193)" strokeOpacity="1" strokeWidth="4" d="M0 0"></path></g></g><g transform="matrix(-0.3420201539993286,0.9396926164627075,-0.9396926164627075,-0.3420201539993286,57.86277770996094,63.6497688293457)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,78,69)" strokeOpacity="1" strokeWidth="4" d="M0 0"></path></g></g><g style={{ display: "none" }}><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g></g><g transform="matrix(-0.882947564125061,-0.4694715738296509,0.4694715738296509,-0.882947564125061,54.99470138549805,66.93231201171875)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(180,123,255)" strokeOpacity="1" strokeWidth="4" d="M0 0"></path></g></g><g transform="matrix(-0.24192190170288086,-0.9702957272529602,0.9702957272529602,-0.24192190170288086,65.31019592285156,68.61397552490234)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,-1,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(195,252,193)" strokeOpacity="1" strokeWidth="3" d="M0 0"></path></g></g><g style={{ display: "none" }}><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g><g><path></path></g></g><g transform="matrix(0.8660253882408142,-0.5,0.5,0.8660253882408142,59.2075309753418,70.43893432617188)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(229,229,44)" strokeOpacity="1" strokeWidth="6" d="M0 0"></path></g></g></g><g clipPath="url(#__lottie_element_45)" transform="matrix(1.0880000591278076,0,0,1.0880000591278076,69.95299530029297,67.9433822631836)" opacity="1" style={{ display: "block" }}><g transform="matrix(1,0,0,1,60,60)" opacity="1" style={{ display: "block" }}><path fill="rgb(255,255,255)" fillOpacity="1" d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"></path><path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="4" d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"></path></g><g style={{ display: "none" }}><path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4"></path></g><g transform="matrix(1,0,0,1,60,60)" opacity="1" style={{ display: "block" }}><path fill="rgb(255,255,255)" fillOpacity="1" d=" M-27.993000030517578,-4.015999794006348 C-27.993000030517578,-4.015999794006348 -36.02799987792969,-3.996999979019165 -36.02799987792969,-3.996999979019165 C-36.02799987792969,-3.996999979019165 -36,31.9950008392334 -36,31.9950008392334 C-36,31.9950008392334 -28.027999877929688,31.976999282836914 -28.027999877929688,31.976999282836914 C-28.027999877929688,31.976999282836914 -27.993000030517578,-4.015999794006348 -27.993000030517578,-4.015999794006348z"></path><path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="4" d=" M-27.993000030517578,-4.015999794006348 C-27.993000030517578,-4.015999794006348 -36.02799987792969,-3.996999979019165 -36.02799987792969,-3.996999979019165 C-36.02799987792969,-3.996999979019165 -36,31.9950008392334 -36,31.9950008392334 C-36,31.9950008392334 -28.027999877929688,31.976999282836914 -28.027999877929688,31.976999282836914 C-28.027999877929688,31.976999282836914 -27.993000030517578,-4.015999794006348 -27.993000030517578,-4.015999794006348z"></path></g><g style={{ display: "none" }}><path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4"></path></g></g></g></svg>
                      <span className="text-[#fff]">
                        {parseInt(e.statistics.likeCount).toLocaleString()}
                      </span>
                    </div>
                  </button>
                  <button className="flex items-center   rounded-3xl bg-[#ffffff0a]   px-6">
                    <div className="hover:opacity-65">
                      <span className="text-[#fff] flex items-center gap-3">
                        {parseInt(e.statistics.commentCount).toLocaleString()}{" "}
                        <i className={`fa-solid fa-comment ${''} `}></i>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 whitespace-nowrap ">
                <p className="text-[#f1f1f1]">
                  {moment(e.snippet.publishedAt).fromNow()}
                </p>
              </div>
              <div className="mt-6">
                <pre
                  className={`2xl:text-[18px] max-sm:text-[12px] text-white text-justify whitespace-pre-wrap line-clamp-${line}`}
                >
                  {e.snippet.description}
                </pre>
                <span
                  className="text-[#AAAAAA] cursor-pointer"
                  onClick={() => setLine(line ? 500 : 2)}
                >
                  {like == '1' ? "Show More" : "Shorten"}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center gap-3 ">
          <Suggested SuggestedVideo={suggestedVideo && suggestedVideo.items} />
        </div>
      </div>
    </div>
  );
};


// 2xl:w-[1100px] xl:w-[900px] 2xl:h-[600px] xl:h-[500px] lg:w-[650px] lg:h-[400px] md:w-full md:h-[450px] sm:w-full sm:h-[450px] max-sm:w-full max-sm:h-[200px]