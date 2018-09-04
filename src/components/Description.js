import React from 'react';

const Description = (props) => {

  // props.details.map(string => <span className="bold newlined"></span>)


  // Splitting on line with text templating
  const paragraphs = props.text.split('\n');
  // console.log(paragraphs)

  // Assigning each paragraph split p tags
  const paragraphElements = paragraphs.map(paragraph => <p>{paragraph}</p>);
  // console.log("paragraphElements", paragraphElements)

  return (
    <div className="side-panel-description">
      <h3>
        {paragraphElements}
      </h3>
    </div>
  );
}

export default Description;
