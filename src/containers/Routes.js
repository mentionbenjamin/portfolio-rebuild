import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// projects
import ProjectPreviewNav from "../components/ProjectPreviewNav.js";
import Eventfull from "../components/projects/Eventfull.js";
import Home from "../components/projects/Home.js";
import Plumtree from "../components/projects/Plumtree.js";
import TrackYoself from "../components/projects/TrackYoself.js";
import Frogging from "../components/projects/Frogging.js";
import Chapeltown from "../components/projects/Chapeltown.js";

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="project-preview-wrapper">
          <Router>
            <React.Fragment>
              <ProjectPreviewNav />
              <Route exact path="/" component={Home} />
              <Route path="/eventfull" component={Eventfull} />
              <Route path="/plumtree" component={Plumtree} />
              <Route path="/trackyoself" component={TrackYoself} />
              <Route path="/frogging" component={Frogging} />
              <Route path="/chapeltown" component={Chapeltown} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default Routes;
