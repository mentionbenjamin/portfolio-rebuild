import React from 'react';

const Details = (props) => {


  // Splitting on line with text templating
  // const paragraphs = props.text.split('\n');
  // console.log(paragraphs)

  // Assigning each paragraph split p tags
  // const paragraphElements = paragraphs.map(paragraph => <p key={paragraph.id}>{paragraph}</p>);
  // console.log("paragraphElements", paragraphElements)


  return (
    <div className="side-panel-details">
      {props.text}
    </div>
  );
}

export default Details;
