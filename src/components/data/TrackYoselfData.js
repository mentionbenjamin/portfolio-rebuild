import React from "react";
import { Link } from 'react-router-dom';


const TrackYoselfData = {
  name: 'TrackYoself',

  header: (
    <h1>Track Yo'self</h1>),

  caption: (
    <h3>
      <span className="caption">
        Spending tracker web application with an animated UI.
      </span>
    </h3>),

  details: (
    <h3>
      <span className="details-bold">Time-frame:</span> 6 days
      <br/>
      <span className="details-bold">Environment:</span> CodeClan Bootcamp
      <br/>
      <span className="details-bold">Tools:</span> Ruby, Sinatra, HTML5, CSS3, pSQL
    </h3>),

  description: (
    <h3>
      Tamen imitarentur singulis tamen appellat e aut veniam summis dolor laborum, appellat exquisitaque, nisi ab quo aute cernantur.Nostrud firmissimum qui vidisse qui aut irure transferrem, aliquip e duis iis aliqua mandaremus excepteur.
      <br/><br/>
      Quo esse relinqueret.Meiusmod, dolor pariatur de singulis. Ex officia cohaerescant, duis consectetur probant elit litteris. Excepteur minim nescius laboris quo nescius si veniam.
    </h3>),

  link: (
    <h3>
      <span className="link-colour-bg">
        <a href="http://google.co.uk" rel="noopener noreferrer" target="_blank">
          Visit
        </a>
       </span>
     </h3>),

  footer: (
    <h4>
      <Link className="mb-footer-link" to="/">mentionbenjamin</Link>
    </h4>)
}

export default TrackYoselfData;
