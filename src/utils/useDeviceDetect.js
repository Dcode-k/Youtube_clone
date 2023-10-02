import React, {useEffect, useState} from "react";

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    return isMobile;
  };

export default useDeviceDetect;