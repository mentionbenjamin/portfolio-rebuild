import React from 'react';

const Header = (props) => {
  return (
    <div className="side-panel-header">
      <h1>
        {props.text}
      </h1>
    </div>
  );
}

export default Header;
