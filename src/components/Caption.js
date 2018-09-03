import React from 'react';

const Caption = (props) => {
  return (
    <div className="side-panel-caption">
      <h3>
        {props.text}
      </h3>
    </div>
  );
}

export default Caption;
