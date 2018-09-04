import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewNav = () => (

  <div className="project-preview-parent">
    {/* <Link to="/">Home</Link> */}
    <article>
      <Link to="/frogging">
        <img className="frogging-preview"
                   src={require('../images/frogging/squiggle-1.jpg')}
                   alt="frogging" />
      </Link>
    </article>

    <article>
      <Link to="/chapeltown">
        <img className="chapeltown-preview"
                   src={require('../images/chapeltown/BothModels.jpg')}
                   alt="chapeltown" />
      </Link>
    </article>

    <article>
      <Link to="/plumtree">
        <img className="plumtree-preview"
                   src={require('../images/plumtree/plumtree.jpg')}
                   alt="plumtree" />
      </Link>
    </article>

    <article>
      <Link to="/eventfull">
        <img className="eventfull-preview"
                   src={require('../images/eventfull/eventfull.jpg')}
                   alt="eventfull" />
      </Link>
    </article>

    <article>
      <Link to="/trackyoself">
        <img className="trackyoself-preview"
                   src={require('../images/trackyoself/trackyoself.jpg')}
                   alt="trackyoself" />
      </Link>
    </article>

  </div>
)




export default ProjectPreviewNav;
