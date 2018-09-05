import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// routes
import Home from "../components/routes/Home.js";
import Eventfull from "../components/routes/Eventfull.js";
import Plumtree from "../components/routes/Plumtree.js";
import TrackYoself from "../components/routes/TrackYoself.js";
import Frogging from "../components/routes/Frogging.js";
import Chapeltown from "../components/routes/Chapeltown.js";

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path="/"      component={Home}        />
            <Route path="/eventfull"   component={Eventfull}   />
            <Route path="/plumtree"    component={Plumtree}    />
            <Route path="/trackyoself" component={TrackYoself} />
            <Route path="/frogging"    component={Frogging}    />
            <Route path="/chapeltown"  component={Chapeltown}  />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default Routes;
