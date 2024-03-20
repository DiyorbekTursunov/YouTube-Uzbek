import { useEffect, useState } from "react";
import Categorys from "../Categorys/Categorys";
import Video from "../video/Video";
import { ApiService } from "../../service/api.servise";
import errorImage from "../images/error.png"
export const Home = () => {
  const [videos, setVideos] = useState<any>(null);
  const [selectedCatigory, setSelectedCatigory] = useState<string>("Texno Plov");
  const [loading, setloading] = useState<boolean>(false)
  const [isError, setisError] = useState<boolean>()
  const [errorMassage, seterrorMassage] = useState<boolean>()

  const selectHendel = (catigory: string) => setSelectedCatigory(catigory);
  useEffect(() => {
    const getData = async () => {
      setloading(true)
      try {
        const data = await ApiService.Feching(
          `search?part=snippet&q=${selectedCatigory}`
        );

        setVideos(data);
        setloading(false)
        setisError(false)
        seterrorMassage(false)
      } catch (error: any) {
        console.log(error);
        if (error.code === "ERR_NETWORK") seterrorMassage(true)
        
        setloading(false)
        setisError(true)
      }
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
        {videos && <Video videos={videos.items} />}
        {isError && <div className="text-white flex flex-col items-center">
          <img src={errorImage} alt="error image" className="pb-3" />
          <h1 className="text-[#838383] text-center text-3xl pb-3">{errorMassage  ? "Network Error" : "Interlal server error please try again later" }</h1>
          <p className="text-center text-[#838383]">{!! errorMassage || "more details: the number of requests for the youtube api is over, if more than 500 requests are sent per day, the server will stop working, please try tomorrow"}</p>
        </div>}
      </div>
    </div>
  );
};

