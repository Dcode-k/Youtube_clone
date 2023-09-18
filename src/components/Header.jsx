import "../styles/Header.css";
import {useEffect, useState} from 'react'
import Logo from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import Suggestions from "./Suggestions";
import { cacheSuggestions } from "../utils/suggestionslice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
const [searchInput,setSearchInput]=useState("");
const [suggestionList,setSuggestionsList]=useState([]);
const [showSuggestions,setShowSuggestions]=useState(false);
const navigate=useNavigate();
const dispatch=useDispatch();

const suggestion=useSelector(store=>store.suggestion);

useEffect(()=>{
   if(suggestion[searchInput]){
    setSuggestionsList(suggestion[searchInput]);
   }
   else{
    const timer=setTimeout(() => {
      fetchSuggestionResults();
    }, 200);
    return ()=> clearTimeout(timer);
   }
  },[searchInput]);

async function fetchSuggestionResults(){
   const data=await fetch(YOUTUBE_SUGGESTIONS_API+searchInput);
   const suggestionList=await data.json();
   setSuggestionsList(suggestionList[1]);
   dispatch(cacheSuggestions({
    [searchInput]:suggestionList[1]
  }));
}

function submitHandler(e){
  e.preventDefault();
  console.log("submitted successfully");
  navigate('/search/?q='+searchInput);
}

function toggleMenuHandler(){
   dispatch(toggleMenu());
}

  return (
    <nav className="navbar">
      <div className="first-part">
        <div className="menu" onClick={()=>toggleMenuHandler()}>
          <i className="ri-menu-line"></i>
        </div>
        <Link to="/" className="logo-part">
          <img src={Logo} alt="youtube logo" height="30px" />
          <h3>YouTube</h3>
          <sup>IN</sup>
        </Link>
      </div>
      <div className="second-part">
        <div className="search-block">
          <div className="search-field">
            <form onSubmit={(e)=> submitHandler(e)}>
            <input type="text"
           placeholder="Search" 
           value={searchInput}
           onChange={(e)=>setSearchInput(e.target.value)}
           onFocus={()=>setShowSuggestions(true)}
           onBlur={()=>setShowSuggestions(false)}
          />
          </form>
          </div>
          <Link to={"/search"} className="search-icon">
            <i className="ri-search-line"></i>
            </Link>
        </div>
        {
          (showSuggestions && searchInput) &&  <Suggestions suggestionList={suggestionList}/>
        }
        <div className="voice-search">
        <i className="ri-mic-fill"></i>
        </div>
      </div>
      <div className="third-part">
        <div className="video-icon">
        <i className="ri-video-add-line"></i>
        </div>
        <div className="bell-icon">
        <i className="ri-notification-2-line"></i>
        </div>
        <div className="user-icon">
        <i className="ri-user-fill"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
