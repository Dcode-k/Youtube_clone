import React, { useEffect } from "react";
import "../styles/Suggestions.css";
const Suggestions = ({suggestionList}) => {
  return (
    <div className="suggestions">
        {suggestionList.map((item,index)=>(
            <div key={index} className="suggestions-item">
            <i className="ri-search-line"></i>
              <li>{item}</li>
            </div>
        ))}
    </div>
  );
};

export default Suggestions;
