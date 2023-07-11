import React, { createContext, useContext, useState } from "react";


const ResultContext = createContext(); //file

const siUrl = "https://google-search72.p.rapidapi.com";
const newsUrl = "https://real-time-news-data.p.rapidapi.com";
const vidUrl="https://youtube-search-results.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('BTS');

  const getResults = async (type, url) => {
    setLoading(true);

    switch (type) {
      case "/search":
        const res = await fetch(`${siUrl}${url}`, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "google-search72.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        const data = await res.json();

        setResults(data);
        // console.log(data);
        setLoading(false);
        break;

      case "/imagesearch":
        const res_image = await fetch(`${siUrl}${url}`, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "google-search72.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        const data_img = await res_image.json();

        setResults(data_img);
        // console.log(data_img);
        setLoading(false);
        break;
      case "/news":
        const res_news = await fetch(`${newsUrl}${url}`, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        const data_news = await res_news.json();

        setResults(data_news);
        // console.log(data_news);
        setLoading(false);
        break;
        case "/videos":
          const res_vid = await fetch(`${vidUrl}${url}`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
              "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            },
          });
          const data_vid = await res_vid.json();
  
          setResults(data_vid);
          console.log(data_vid);
          setLoading(false);
          break;
      default:
        setLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
