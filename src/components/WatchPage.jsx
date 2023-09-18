import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import Carousel from "./Carousel";
import "../styles/WatchPage.css";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import {YOUTUBE_COMMENTS_API} from "../utils/constants"

const WatchPage = () => {
  const [searchParams, setSearchPArams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const [videoInfo, setVideoInfo] = useState();
  const [videoDetails, setVideoDetails] = useState();
  const [comments,setComments]=useState([]);

  //for getting comments
  useEffect(()=>{
     getComments()
  },[])

  async function getComments(){
    const data=await fetch(YOUTUBE_COMMENTS_API+videoId);
    const comments=await data.json();
    // console.log(comments.items);
    setComments(comments.items);
  }

  //for getting one video details

  useEffect(() =>{ getVideoDetails()}, []);

  async function getVideoDetails() {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        videoId +
        "&key=AIzaSyA56McOo_RYebgoNMShIxpGhwci9RSMwCg"
    );
    const videoDetails = await data.json();
    setVideoDetails(videoDetails.items[0]);
    // console.log(videoDetails);
  }


  //for getting all videos info
  useEffect(() => {
    getVideosInfo();
  }, []);

  async function getVideosInfo() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videodetails = await data.json();
    setVideoInfo(videodetails.items);
  }

  //for closing sidebar
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="watchPage-container">
      <div className="watchpage-firstsubpart">
        <iframe
          width="900"
          height="500"
          src={
            "https://www.youtube.com/embed/" + videoId + "?si=gCNHi_ya3qf5tDty"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2 className="video-title">
          {videoDetails?.snippet?.localized?.title}
        </h2>
        <div className="info-container">
          <div className="big-container">
            <div className="channeldetails-container">
              <div className="channeltitle-container">
                <div className="channel-badge">
                  {videoDetails?.snippet?.channelTitle[0]}
                </div>
                <div className="channelname-container">
                  <h3 className="channel-name">
                    {videoDetails?.snippet?.channelTitle}
                  </h3>
                  <h5>64657k subscribers</h5>
                </div>
              </div>
              <button className="subsribe-btn">Subscribe</button>
            </div>
            <div className="likeDislike-container">
              <div className="likeDislikeBtns">
                <button className="like-btn">
                  <i className="ri-thumb-up-line"></i>35K
                </button>
                <button className="dislike-btn">
                  <i className="ri-thumb-down-line"></i>
                </button>
              </div>
              <button className="share-btn">
                <i className="ri-share-forward-line"></i> Share
              </button>
              <button className="save-btn">
                <i className="ri-menu-add-line"></i> Save
              </button>
              <div className="report-btn">...</div>
            </div>
          </div>
          <div className="description-container">
            {videoDetails?.snippet?.localized?.description}
          </div>
        </div>
        <div className="comments-container">
          <div className="commentsFirstPart">
            <h3>{comments.length} Comments</h3>
            <h3>
              <i className="ri-menu-4-fill"></i> Sort by
            </h3>
          </div>
          <div className="commentsSecondPart">
            <div className="user-badge">kk</div>
            <input className="user-comment" type="text" placeholder="Add a comment"/>
          </div>
          <div className="commentsThirdPart">
            {comments && comments.map((comment)=>( <div key={comment.id} className="comment">
              <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}alt="authorProfileImageUrl" />
              <div className="commentInfo">
                <div className="authorInfo">
                <h5>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h5>
                <h6>1 month ago</h6>
                </div>
                <p className="comment-text">
                {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
              </p>
              <div className="commentLikeDislike">
                <div className="commentlike-btn"><i className="ri-thumb-up-line"></i>200</div>
                <div className="commentdislike-btn"><i className="ri-thumb-down-line"></i></div>
              </div>
              </div>
             </div>))}
           
          </div>
        </div>
      </div>
      <div className="watchpage-secondsubpart">
        <Carousel />
        {videoInfo &&
          videoInfo.map((video) => (
            <div className="side-videos" key={video.id}>
              <img
                src={video?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
                width="200px"
              />
              <div>
                <h4>{video?.snippet?.localized?.title}</h4>
                <h5>{video?.snippet?.channelTitle}</h5>
                <h5>
                  {Math.trunc(video?.statistics?.viewCount) / 1000}K views
                </h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
