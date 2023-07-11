import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(()=>{

    if (searchTerm !== ''){
        if (location.pathname === '/search' || location.pathname === '/imagesearch'){
        getResults(`${location.pathname}`,`${location.pathname}?q=${searchTerm}&num=10`);
        }
        else {
            getResults(`${location.pathname}`,'/search?language=EN')
        }
    }
  },[searchTerm, location.pathname]);



  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
        return (
            <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
                {results?.items?.map(({ link, title },index)=>(
                    <div key={index} className="md:w-2/5 w-full">
                    <a href={link} target="_blank" rel="noreferrer">
                      <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                      <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                    </a>
                  </div>
                ))}
            </div>
        );
      break;
    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(({ title,thumbnailImageUrl,originalImageUrl }, index) => (
            <a href={originalImageUrl} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-100 mx-2 ">
              <img src={thumbnailImageUrl} alt={title} loading="lazy" height='100px' width='200px'/>
              <p className="sm:w-36 w-56 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
      break;
    case "/news":
      return "news";
      break;

    case "/videos":
      return "videos";
      break;
    default:
      return "ERROR";
      break;
  }
  return <div>Results</div>;
};

export default Results;
