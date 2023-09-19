import VideoContainer from "./VideoContainer";
import '../styles/MainContainer.css'
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { openMenu } from "../utils/appslice";
const MainContainer=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(openMenu());
    },[])
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    let classs="main-container";
    if(!isMenuOpen) classs="main-container compressed-main-container"
    return (
     <div className={classs}>
          <Carousel/>
          <VideoContainer/>
     </div>
    )
}

export default MainContainer;