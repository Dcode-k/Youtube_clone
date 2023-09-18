import React from 'react'
import '../styles/CompressedSideBar.css'
const CompressedSideBar = () => {
  return (
    <div className='compressedSideBar-container'>
        <div className='home-icon compressedSideBarIcon'>
        <i className="ri-home-4-fill"></i>
        <h6>Home</h6>
        </div>
        <div className="shorts-icon compressedSideBarIcon">
        <i className="ri-movie-2-fill"></i>
        <h6>Shorts</h6>
        </div>
        <div className='subscribe-icon compressedSideBarIcon'>
        <i className="ri-coupon-line"></i>
        <h6>Subscriptions</h6>
        </div>
        <div className="library-icon compressedSideBarIcon">
        <i className="ri-movie-fill"></i>
        <h6>Library</h6>
        </div>
    </div>
  )
}

export default CompressedSideBar