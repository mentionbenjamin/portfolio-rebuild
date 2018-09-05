import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewNav = () => (

  <div className="project-preview-parent">
    {/* <Link to="/">Home</Link> */}
    <div>
      <Link to="/frogging">
        <img className="frogging-preview"
                   src={require('../images/preview/1.jpg')}
                   alt="frogging" />
      </Link>
    </div>

    <div>
      <Link to="/chapeltown">
        <img className="chapeltown-preview"
                   src={require('../images/preview/1.jpg')}
                   alt="chapeltown" />
      </Link>
    </div>

    <div>
      <Link to="/plumtree">
        <img className="plumtree-preview"
                   src={require('../images/preview/1.jpg')}
                   alt="plumtree" />
      </Link>
    </div>

    <div>
      <Link to="/eventfull">
        <img className="eventfull-preview"
                   src={require('../images/preview/1.jpg')}
                   alt="eventfull" />
      </Link>
    </div>

    <div>
      <Link to="/trackyoself">
        <img className="trackyoself-preview"
                   src={require('../images/preview/1.jpg')}
                   alt="trackyoself" />
      </Link>
    </div>

  </div>
)




export default ProjectPreviewNav;
