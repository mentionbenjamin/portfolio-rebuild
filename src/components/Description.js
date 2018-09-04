import React from 'react';

const Description = (props) => {

  // props.details.map(string => <span className="bold newlined"></span>)

  const paragraphs = props.text.split('\n'); // Array
  // console.log(paragraphs)
  const paragraphElements = paragraphs.map(paragraph => <p>{paragraph}</p>);
  // console.log(paragraphElements)

  return (
    <div className="side-panel-description">
        {/* {props.description} */}
      <h3>
        {paragraphElements}
      </h3>
    </div>
  );
}

export default Description;
