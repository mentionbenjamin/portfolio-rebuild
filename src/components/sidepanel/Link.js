import React from 'react';
import '../../css/sidepanel/SPLink.css';


const Link = (props) => {
  return (
    <div className="side-panel-link">
      {props.text}
    </div>
  );
}

export default Link;
