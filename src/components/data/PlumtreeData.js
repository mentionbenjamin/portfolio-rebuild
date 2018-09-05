import React from "react";
import { Link } from 'react-router-dom';


const PlumtreeData = {
  name: 'Plumtree',

  header: (<h1>Plumtree</h1>),

  caption: (
    <h3>
      Personal inventory app to track stock, can categorise, search, move to sold and much more.
      <br/>
      Collaboration with Gary Muir.
    </h3>),

  details: (
    <h3>
      <span className="details-bold">Time-frame:</span> 6 days
      <br/>
      <span className="details-bold">Environment:</span> CodeClan Bootcamp
      <br/>
      <span className="details-bold">Tools:</span> Java, Hibernate, HTML5, CSS3
    </h3>),

  description: (
    <h3>
      Tamen imitarentur singulis tamen appellat e aut veniam summis dolor laborum, appellat exquisitaque, nisi ab quo aute cernantur.Nostrud firmissimum quividisse qui aut irure transferrem, aliquip e duis iis aliqua mandaremus excepteur, quo esse relinqueret.
      <br/><br/>
      Anim pariatur appellat si iis fugiat minim aut eiusmod, dolor pariatur de singulis. Ex officia cohaerescant, duis consecteturprobant elit litteris. Excepteur minim nescius laboris quo nescius si veniam.
    </h3>),

  link: (
    <h3>
      <span className="link-colour-bg">
              <a href="http://google.co.uk"
                  rel="noopener noreferrer"
               target="_blank">Visit</a>
       </span>
    </h3>),

  footer: (
    <h4>
      <Link className="mb-footer-link" to="/">mentionbenjamin</Link>
    </h4>)
}

export default PlumtreeData;
