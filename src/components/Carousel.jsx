import React,{useState}from 'react'
import ButtonList from './ButtonList'
import '../styles/Carousel.css'
const Carousel = () => {
    const [showLeftIcon,setShowLeftIcon]=useState(false);
    const [showRightIcon,setShowRightIcon]=useState(true);
    
    const clickNextHandler=()=>{
        setShowLeftIcon(true);
        let box=document.querySelector('.button-list');
        //  console.log(box);
        //  console.log(box.querySelectorAll('.button'));
        let width=box.clientWidth;
        // console.log(width);
        box.scrollLeft=box.scrollLeft + width;
        // console.log(box.scrollLeft)
    }
    const clickPrevHandler=()=>{
        let box=document.querySelector('.button-list');
        // console.log(box);
       let width=box.clientWidth;
       box.scrollLeft=box.scrollLeft - width;
      //    console.log(width);
    }
  return (
    <div className='carousel'>
     {showLeftIcon && <button className='carousel-btn left-btn' onClick={clickPrevHandler}>
            &lt;
        </button>} 
        <ButtonList/>
       {showRightIcon && <button className='carousel-btn right-btn' onClick={clickNextHandler}>
            &gt;
        </button> }
    </div>
  )
}

export default Carousel