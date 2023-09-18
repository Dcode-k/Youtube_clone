import VideoContainer from "./VideoContainer";
import '../styles/MainContainer.css'
import Carousel from "./Carousel";
import Suggestions from "./Suggestions";
import { useSelector } from "react-redux";
const MainContainer=()=>{
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