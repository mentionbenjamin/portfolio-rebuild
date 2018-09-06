import React from "react";
import { Link } from 'react-router-dom';


const EventfullData = {
  name: 'Frogging',

  header: (
    <h1>Froggin' Around</h1>),

  caption: (
    <h3>
      <span className="caption">
        Rationalising a graffiti tag as a brand or corporate logo.
      </span>
    </h3>),

  details: (
    <h3>
      <span className="details-bold">Time-frame:</span> 2 weeks
      <br/>
      <span className="details-bold">Environment:</span> University
      <br/>
      <span className="details-bold">Tools:</span> Adobe Suite, Canon EOS 800D
    </h3>),

  description: (
    <h3>
      As a way to kickstart final year, we had two weeks to interpret three graffiti tags as brand or corporate logos—here is part one of three. Due to the experimental nature of the brief, the aim was to have a bit of fun whilst exploring how to get the public involved in idea generation.
      <br/><br/>
      The outcome proved to be an enlightening experiment exploring the manipulation of a single character face; introducing me to new ideas for communicating the personality of a brand.
      Inviting passers-by to express themselves through pen to paper proved to be an insightful experiment. In a way, it gave back to the public and humanised the way in which a consumer can connect with a brand.
    </h3>),

  link: null,

  footer: (
    <h4>
      <Link className="mb-footer-link" to="/">mentionbenjamin</Link>
    </h4>),

  imageUrls: [
    require('../../images/frogging/alien-tags.jpg'),
    require('../../images/frogging/tag-practice.jpg'),
    require('../../images/frogging/sketches.jpg'),
    require('../../images/frogging/squiggle-2.jpg'),
    // require('../../images/frogging/squiggle-3.jpg'),
    require('../../images/frogging/squiggle-1.jpg'),
    require('../../images/frogging/squiggle-4.jpg'),
    require('../../images/frogging/frogs.gif'),
    require('../../images/frogging/wallpaper.png')
  ]
}

export default EventfullData;
