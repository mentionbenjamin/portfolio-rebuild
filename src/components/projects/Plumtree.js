import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";
import PlumtreeData from '../data/PlumtreeData';



const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={PlumtreeData.header}
                  caption={PlumtreeData.caption}
                  details={PlumtreeData.details}
              description={PlumtreeData.description}
                   footer={PlumtreeData.footer}
        />
      </div>

      <div className="project-preview-container">
        <ProjectPreviewNav />
      </div>

    </div>

  </div>

);

export default Home;
