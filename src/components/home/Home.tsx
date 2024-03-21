import { useEffect, useState } from "react";
import Categorys from "../Categorys/Categorys";
import Video from "../video/Video";
import ApiService from "../../service/api.servise";

import errorImage from "../images/error.png"

//types 
import { homevideosType } from "types";

export const Home = () => {

  const [videos, setVideos] = useState<homevideosType | null>(null);
  const [selectedCatigory, setSelectedCatigory] = useState<string>("Texno Plov");
  const [loading, setloading] = useState<boolean>(false)
  const [error, setError] = useState<{ message: string, networkError: boolean } | null>(null);


  const selectHendel = (catigory: string) => setSelectedCatigory(catigory);

  useEffect(() => {
    const getData = async () => {
      setloading(true)
      try {
        const data = await ApiService.Feching(
          `search?part=snippet&q=${selectedCatigory}`
        );
        setVideos(data);
      } catch (error) {
        const err = error as { code?: string };

        if (err.code === "ERR_NETWORK") {
          setError({ message: "Network Error", networkError: true });
        } else {
          setError({ message: "Internal server error. Please try again later.", networkError: false });
        }
      }
      setloading(false)
    };
    getData();
  }, [selectedCatigory]);

  return (
    <div className="bg-[#121212] w-full ">
      {loading && <div className="bg-slate-950 absolute w-full h-screen top-0 left-0 opacity-60"></div>}
      <div className="max-w-[3500px] mx-auto">
        <Categorys
          selectHendel={selectHendel}
          selectedCatigory={selectedCatigory}
        />
        {videos && <Video channelVideo={videos.items} />}
        {error && (
          <div className="text-white flex flex-col items-center">
            <img src={errorImage} alt="error image" className="pb-3" />
            <h1 className="text-[#838383] text-center text-3xl pb-3">{error.message}</h1>
            <p className="text-center text-[#838383]">
              {error.networkError ? "More details: the number of requests for the YouTube API is over. If more than 500 requests are sent per day, the server will stop working. Please try again tomorrow." : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

