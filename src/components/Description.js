import React from 'react';

const Description = (props) => {
  return (
    <div className="side-panel-description">
      <h3>
        {props.text}
      </h3>
    </div>
  );
}

export default Description;
