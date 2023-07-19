import React, { useEffect, useState } from "react";
import Categorys from "../Categorys/Categorys";
import { ApiService } from "../../service/api.servise";
import Video from "../video/Video";
const Home = () => {
  const [selectedCatigory, setSelectedCatigory] = useState("Texno Plov");
  const selectHendel = (catigory) => setSelectedCatigory(catigory);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.Feching(
          `search?part=snippet&q=${selectedCatigory}`
        );
        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCatigory]);
  return (
    <div className="bg-[#121212] w-full ">
      <div className="max-w-[1740px] mx-auto pt-7">
        <hr className="opacity-25 mt-[8px] mb-5" />
        <Categorys
          selectHendel={selectHendel}
          selectedCatigory={selectedCatigory}
        />
        <hr className="opacity-25 mt-5" />
        <div className="p-10">{videos && <Video videos={videos.items} />}</div>
      </div>
    </div>
  );
};

export default Home;
