import React,{createContext,useContext,useState} from "react";

const ResultContext=createContext();
const baseUrl='https://google-search74.p.rapidapi.com';

export const ResultContextProvider=({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults= async (type)=>{
        setLoading(true);

        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1874a8ac00mshada8f8c44d4cf1ep1da867jsn7c724382c67c',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
              },
          });

          const data = await res.json();
          console.log(data)
          setResults(data);
          setLoading(false);

    };

    return(
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,loading}}>
            { children }
        
        </ResultContext.Provider>
    );
}  

export const useResultContext = () => useContext(ResultContext);