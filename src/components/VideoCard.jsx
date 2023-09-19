import { useSelector } from 'react-redux';
import '../styles/VideoCard.css'

const VideoCard=({videoInfo})=>{

const thumbNail=videoInfo.snippet.thumbnails.medium.url;
const videoTitle=videoInfo.snippet.localized.title;
const channelTitle=videoInfo.snippet.channelTitle;
const views=videoInfo.statistics.viewCount;

const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

let videocardclass="video-card";
let thumbnailclass="thumbnail";
let thumbnailimgclass="thumbnailimg";
if(!isMenuOpen){
    videocardclass="video-card compress-video-card";
    thumbnailclass="thumbnail compress-thumbnail";
    thumbnailimgclass="thumbnailimg compress-thumbnailimg"
}

    return(
        <div className={videocardclass}>
            <div className={thumbnailclass}>
               <img className={thumbnailimgclass} src={thumbNail} alt="thumbnail"  />
            </div>
            <div className="subpart">
                <div className='video-title'>
                   {videoTitle}
                   <div className="channel-title">
                    <h4>
                    {channelTitle}
                    </h4>
                    <p>
                       {Math.trunc(views/1000)}K views <span>.</span>
                    </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;