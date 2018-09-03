import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewNav = () => (

  <div className="project-preview-parent">
    {/* <Link to="/">Home</Link> */}
    <Link to="/frogging">
      <img className="frogging-preview" src={require('../images/frogging/squiggle-1.jpg')} />
    </Link>

    <Link to="/chapeltown">
      <img className="chapeltown-preview" src={require('../images/chapeltown/BothModels.jpg')} />
    </Link>

    <Link to="/plumtree">
      <img className="plumtree-preview" src={require('../images/plumtree/plumtree.jpg')} />
    </Link>

    <Link to="/eventfull">
      <img className="eventfull-preview" src={require('../images/eventfull/eventfull.jpg')} />
    </Link>

    <Link to="/trackyoself">
      <img className="trackyoself-preview" src={require('../images/trackyoself/trackyoself.jpg')} />
    </Link>
  </div>
)




export default ProjectPreviewNav;
