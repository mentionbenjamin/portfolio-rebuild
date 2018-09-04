import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";
import TrackYoselfData from '../data/TrackYoselfData';



const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={TrackYoselfData.header}
                  caption={TrackYoselfData.caption}
                  details={TrackYoselfData.details}
              description={TrackYoselfData.description}
                   footer={TrackYoselfData.footer}
        />
      </div>

      <div className="project-preview-container">
        <ProjectPreviewNav />
      </div>

    </div>

  </div>

);

export default Home;
