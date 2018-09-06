import React from 'react';


const ImageScroller = (props) => {
const eachImage = props.urls.map(image => <img src={image}/>);

return (
  <div className="project-preview-container">
    {eachImage}
  </div>)
}

export default ImageScroller;
