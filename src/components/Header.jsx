import styles from "../styles/Header.module.css";
import {useEffect, useState} from 'react'
import Logo from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebarModal, openSidebarModal, toggleMenu } from "../utils/appslice";
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
const isSidebarModal=useSelector(store=>store.app.isSidebarModal);

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
   if(isSidebarModal===true) {
    dispatch(openSidebarModal());
   }
   else{
    dispatch(toggleMenu());
   }
}

  return (
    <nav className={styles.navbar}>
      <div className={styles.first_part}>
        <div className={styles.menu} onClick={()=>toggleMenuHandler()}>
          <i className="ri-menu-line"></i>
        </div>
        <Link to="/" className={styles.logo_part}>
          <img src={Logo} alt="youtube logo" height="30px" />
          <h3>YouTube</h3>
          <sup>IN</sup>
        </Link>
      </div>
      <div className={styles.second_part}>
        <div className={styles.search_block}>
          <div className={styles.search_field}>
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
          <Link to={"/search"} className={styles.search_icon}>
            <i className="ri-search-line"></i>
            </Link>
        </div>
        {
          (showSuggestions && searchInput) &&  <Suggestions suggestionList={suggestionList}/>
        }
        <div className={styles.voice_search}>
        <i className="ri-mic-fill"></i>
        </div>
      </div>
      <div className={styles.third_part}>
        <div className={styles.video_icon}>
        <i className="ri-video-add-line"></i>
        </div>
        <div className={styles.bell_icon}>
        <i className="ri-notification-2-line"></i>
        </div>
        <div className={styles.user_icon}>
        <i className="ri-user-fill"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
