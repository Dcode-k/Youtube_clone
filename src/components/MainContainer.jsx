import VideoContainer from "./VideoContainer";
import '../styles/MainContainer.css'
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { destroySidebarModal, makeSidebarModal, openMenu } from "../utils/appslice";
import useDeviceDetect from "../utils/useDeviceDetect";
const MainContainer=()=>{
    // const isSidebarModal=useSelector(store=>store.app.isSidebarModal);
    const dispatch=useDispatch();
    const isMobile=useDeviceDetect();
    console.log(isMobile);
    useEffect(() => {
        if (isMobile) {
          dispatch(makeSidebarModal());
        } else {
          dispatch(destroySidebarModal());
        }
      }, [isMobile, dispatch]);
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