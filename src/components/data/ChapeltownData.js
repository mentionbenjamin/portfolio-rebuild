import React from "react";
import { Link } from 'react-router-dom';



const ChapeltownData = {
  name: 'Home',

  header: (
    <h1>Chapeltown Arts Festival</h1>),

  caption: (
    <h3>
      <span className="caption">Redesign the publicity material for a week-long festival promoting creativity in Chapeltown.</span>
    </h3>),

  details: (
    <h3>
      <span className="details-bold">Time-frame:</span> 4 weeks
      <br/>
      <span className="details-bold">Environment:</span> University
      <br/>
      <span className="details-bold">Tools:</span> Adobe Suite, Canon EOS 800D
    </h3>),

  description: (
    <h3>
      After piloting in 2014, Chapeltown Arts Festival is back for the third year; making its mark on promoting and encouraging the arts and creativity in the Chapeltown area in north-east Leeds.
      <br/><br/>
      The client requested a solution that was cost-effective and one that could serve as a souvenir of the event as a way of not wasting paper. By creating a pair of leaflets the user can read, cut & stick their way to building their very own kirigami pencil or ghettoblaster model as a way of promoting the creative philosophy and Afro-Jamaican roots of the festival.
      <br/><br/>
      The experimental design of the leaflet invited the public to get involved in the festival in a crafty, whimsical way. By using an A5 layout and a single colour format kept costs low and allowed the option of using different coloured paper to print on as a way of connecting with the diverse area of Chapeltown.
    </h3>),

  footer: (
    <h4>
      <Link className="mb-footer-link" to="/">mentionbenjamin</Link>
    </h4>),

  imageUrls: [
    require('../../images/chapeltown/ProcessGif.gif'),
    require('../../images/chapeltown/modeltests.jpg'),
    require('../../images/chapeltown/leafletgif.gif'),
    require('../../images/chapeltown/leafletmashup.jpg'),
    require('../../images/chapeltown/BoomboxConstruction.gif'),
    require('../../images/chapeltown/PencilConstruction.gif'),
    require('../../images/chapeltown/BothModels.jpg')
    // require('../../images/chapeltown/Leaflet-Model-Swap.gif'),
  ]
}

export default ChapeltownData;
