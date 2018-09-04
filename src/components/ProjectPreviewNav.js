import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewNav = () => (

  <div className="project-preview-parent">
    {/* <Link to="/">Home</Link> */}
    <article>
      <Link to="/frogging">
        <img className="frogging-preview" src={require('../images/frogging/squiggle-1.jpg')} />
      </Link>
    </article>

    <article>
      <Link to="/chapeltown">
        <img className="chapeltown-preview" src={require('../images/chapeltown/BothModels.jpg')} />
      </Link>
    </article>

    <article>
      <Link to="/plumtree">
        <img className="plumtree-preview" src={require('../images/plumtree/plumtree.jpg')} />
      </Link>
    </article>

    <article>
      <Link to="/eventfull">
        <img className="eventfull-preview" src={require('../images/eventfull/eventfull.jpg')} />
      </Link>
    </article>

    <article>
      <Link to="/trackyoself">
        <img className="trackyoself-preview" src={require('../images/trackyoself/trackyoself.jpg')} />
      </Link>
    </article>

  </div>
)




export default ProjectPreviewNav;
