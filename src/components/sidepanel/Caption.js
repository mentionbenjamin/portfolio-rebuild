import React from 'react';
import '../../css/sidepanel/SPCaption.css';


const Caption = (props) => {
  return (
    <div className="side-panel-caption">
      {props.text}
    </div>
  );
}

export default Caption;
