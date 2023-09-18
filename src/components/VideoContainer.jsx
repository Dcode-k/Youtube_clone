import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useEffect,useState } from "react";
import VideoCard from "./VideoCard";
import '../styles/VideoContainer.css'
import { Link } from "react-router-dom";

const VideoContainer=()=>{
   const [videoInfo,setVideoInfo]=useState();
 
useEffect(() => {
   getVideosInfo();
}, []);

async function getVideosInfo(){
   const data= await fetch(YOUTUBE_VIDEOS_API);
   const videodetails=await data.json();
   setVideoInfo(videodetails.items);
   // console.log(videoInfo);
}
 

 if(!videoInfo) return null;
 
// console.log(videoInfo);
   return (
      <div className="video-container"> 
      {videoInfo.map((info)=>(
         <Link to={"/watch?v="+info.id} key={info.id} style={{ textDecoration: 'none',color:'white', }}>
          <VideoCard videoInfo={info}/>
         </Link>
       ))}
       </div>
   )
      
      
}

export default VideoContainer;