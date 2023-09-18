export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+process.env.REACT_APP_YOUTUBE_VIDEOS_API;
export const YOUTUBE_SUGGESTIONS_API = "https://yt-server-byfx.onrender.com/getData/";
export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id&part=replies&part=snippet&key="+process.env.REACT_APP_YOUTUBE_VIDEOS_API+"&videoId=";
export const YOUTUBE_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?&part=snippet&maxResults=50&key="+process.env.REACT_APP_YOUTUBE_VIDEOS_API+"&q="

export const YOUTUBE_VTDEO_DETAILS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key="+process.env.REACT_APP_YOUTUBE_VIDEOS_API+"&id=";