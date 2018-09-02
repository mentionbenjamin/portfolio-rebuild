import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreviewNav = () => (
  <ul>
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/eventfull">Eventfull</Link>
    </li>
    <li>
      <Link to="/plumtree">Plumtree</Link>
    </li>
    <li>
      <Link to="/trackyoself">TrackYoself</Link>
    </li>
    <li>
      <Link to="/frogging">Frogging</Link>
    </li>
    <li>
      <Link to="/chapeltown">Chapeltown</Link>
    </li>
  </ul>
)




export default ProjectPreviewNav;
