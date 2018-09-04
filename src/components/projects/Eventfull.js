import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";
import EventfullData from '../data/EventfullData';



const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={EventfullData.header}
                  caption={EventfullData.caption}
                  details={EventfullData.details}
              description={EventfullData.description}
                   footer={EventfullData.footer}
        />
      </div>

      <div className="project-preview-container">
        <ProjectPreviewNav />
      </div>

    </div>

  </div>

);

export default Home;
