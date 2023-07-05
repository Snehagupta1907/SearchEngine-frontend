import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';



const Results = () => {
    const { results, loading, getResults, searchTerm }=useResultContext();
    const location=useLocation();

    if(loading) return <Loading/>
  return (
    <div>Results</div>
  )
}

export default Results