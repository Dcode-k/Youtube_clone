import { useSelector } from "react-redux";
import "../styles/Sidebar.css";
const Sidebar = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div>
    <div className="sidebar-container"  >
      <div className="sidebar-items">
      <div className="home sidebar-item">
        <i className="ri-home-5-fill"></i>
        <h4>Home</h4>
      </div>
      <div className="shorts sidebar-item">
        <i className="ri-youtube-line"></i>
        <h4>Shorts</h4>
      </div>
      <div className="Subscriptions sidebar-item">
        <i className="ri-book-mark-line"></i>
        <h4>Subscriptions</h4>
      </div>
      </div>
      <div className="sidebar-items">
      <div className="library sidebar-item">
      <i className="ri-movie-fill"></i>
        <h4>Library</h4>
      </div>
      <div className="history sidebar-item">
      <i className="ri-history-line"></i>
        <h4>History</h4>
      </div>
      <div className="your-videos sidebar-item">
      <i className="ri-folder-video-fill"></i>
        <h4>Your videos</h4>
      </div>
      <div className="watch-later sidebar-item">
      <i className="ri-time-fill"></i>
        <h4>Watch later</h4>
      </div>
      <div className="liked-videos sidebar-item">
      <i className="ri-thumb-up-fill"></i>
        <h4>Liked videos</h4>
      </div>
      <div className="show-more sidebar-item">
      <i className="ri-arrow-drop-down-line"></i>
        <h4>Show more</h4>
      </div>
      </div>
      <div className="sidebar-items">
          <h3 className="sub-heading">Subscriptions</h3>
          <div className="sidebar-item">
          <div className="sub-badge">PW</div>
        <h4>Physics Wallah...</h4>
       </div>
       <div className="sidebar-item">
       <div className="sub-badge">PW</div>
        <h4>Physics Wallah...</h4>
       </div>
       <div className="sidebar-item">
       <div className="sub-badge">PW</div>
        <h4>Physics Wallah...</h4>
      </div>
      <div className="show-more sidebar-item">
      <i className="ri-arrow-drop-down-line"></i>
        <h4>Show 86 more</h4>
      </div>
      </div>
      <div className="sidebar-items">
          <h3 className="sub-heading">Explore</h3>
          <div className=" sidebar-item">
          <i className="ri-fire-fill"></i>
        <h4>Trending</h4>
       </div>
       <div className="sidebar-item">
       <i className="ri-shopping-bag-fill"></i>
        <h4>Shopping</h4>
       </div>
       <div className=" sidebar-item">
       <i className="ri-music-line"></i>
        <h4>Music</h4>   
      </div>
      <div className="sidebar-item">
      <i className="ri-clapperboard-fill"></i>  
        <h4>Movies</h4>         
      </div>
      <div className="sidebar-item">
      <i className="ri-signal-tower-line"></i>
        <h4>Live</h4>   
      </div>
      <div className="sidebar-item">
      <i className="ri-gamepad-fill"></i> 
        <h4>Gaming</h4>         
      </div>
      <div className="sidebar-item">
      <i className="ri-file-list-3-fill"></i>
        <h4>News</h4>          
      </div>
      <div className="sidebar-item">
      <i className="ri-trophy-fill"></i>
        <h4>Sports</h4>          
      </div>
      <div className="sidebar-item">
      <i className="ri-lightbulb-fill"></i> 
        <h4>Learning</h4>          
      </div>
      <div className="show-more sidebar-item">
      <i className="ri-handbag-fill"></i>
        <h4>Fashion and Beauty</h4>
      </div>
      </div>
      <div className="sidebar-items">
          <h3 className="sub-heading">More from YouTube</h3>
       <div className=" sidebar-item">
       <div className="sub-badge">YP</div>
        <h4>YouTube Premium</h4>
       </div>
       <div className=" sidebar-item">
       <div className="sub-badge">YS</div>
        <h4>YouTube Studio</h4>
      </div>
      <div className=" sidebar-item">
       <div className="sub-badge">YM</div>
        <h4>YouTube Music</h4>
      </div>
      <div className="sidebar-item">
       <div className="sub-badge">YK</div>
        <h4>YouTube Kids</h4>
      </div>
      </div>
      <div className="sidebar-items">
      <div className="settings sidebar-item">
      <i className="ri-settings-2-line"></i>
        <h4>Settings</h4>
      </div>
      <div className="report-history sidebar-item">
      <i className="ri-flag-line"></i>
        <h4>Report History</h4>
      </div>
      <div className="help sidebar-item">
      <i className="ri-question-line"></i>
        <h4>Help</h4>
      </div>
      <div className="feedback sidebar-item">
      <i className="ri-feedback-fill"></i>
        <h4>Feedback</h4>
      </div>
      </div>
      <div className="sideabar-bottom">
         <p className="para">
         About Press Copyright Contact us Creators Advertise Developers
         </p>
         <p className="para">
         Terms Privacy Policy & Safety How YouTube works Test new features
         </p>
         <p className="para-copyright">© 2023 Google LLC</p>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
