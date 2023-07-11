import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext(); //file

const siUrl = "https://google-search72.p.rapidapi.com";
const newsUrl = "https://google-news-api1.p.rapidapi.com";

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
            "x-rapidapi-host": "google-news-api1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        });
        const data_news = await res_news.json();

        setResults(data_news);
        console.log(data_news);
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
