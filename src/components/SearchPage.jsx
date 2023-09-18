import React, { useEffect, useState } from 'react'
import '../styles/SearchPage.css'
import Button from './Button'
import {YOUTUBE_SEARCH_API} from '../utils/constants'
import { useSearchParams } from 'react-router-dom'
const SearchPage = () => {
const [searchResults,setSearchResults]=useState([]);
const [searchParams, setSearchPArams] = useSearchParams();
const searchkey=searchParams.get('q');
console.log(searchkey);
useEffect(()=>{
    fetchSearchResults();
},[searchkey])

async function fetchSearchResults(){
    const data=await fetch(YOUTUBE_SEARCH_API+searchkey);
    const searchResults=await data.json();
    // console.log(searchResults.items);
    setSearchResults(searchResults.items);
}
  return (
    <div className='searchPage'>
        <div className='search-firstpart'>
        <div className='searchBtnList'>
             <Button name="All"/>
            <Button name="Shorts"/>
            <Button name="Unwatched"/>
            <Button name="Watched"/>
            <Button name="For you"/>
            <Button name="Recently uploaded"/>
            <Button name="Live"/>
        </div>
        <div className='fliters'>
            Filters <i className="ri-equalizer-line"></i>
        </div>
        </div>
        {searchResults && searchResults.map((searchResult)=>(
            <div className="search-secondpart" key={searchResult?.etag}>
            <img src={searchResult?.snippet?.thumbnails?.medium?.url} alt="searchVideoThumbnail" width="400px" height="200px"/>
            <div className="searchInfo">
               <h4>{searchResult?.snippet?.title}</h4>
               <div className='searchVideo-views'>
                 <h6>851K views</h6>
                 <h6>1 month ago</h6>
               </div>
               <div className='searchChannelInfo'>
                    <div className='searchChannelBadge'>{searchResult?.snippet?.channelTitle[0]}</div>
                     <h6>{searchResult?.snippet?.channelTitle}</h6>
               </div>
               <h6 className='searchVideoDescription'>
               {searchResult?.snippet?.description}
               </h6>
            </div>
        </div>
        ))}
       
    </div>
  )
}

export default SearchPage