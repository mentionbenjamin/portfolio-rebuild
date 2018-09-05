import React from 'react';
import '../css/sidepanel/SPHeader.css';


const Header = (props) => {
  return (
    <div className="side-panel-header">
        {props.text}
    </div>
  );
}

export default Header;
