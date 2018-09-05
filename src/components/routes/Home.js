import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";
import HomeData from '../data/HomeData';



const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={HomeData.header}
                  details={HomeData.details}
              description={HomeData.description}
                   footer={HomeData.footer}
        />
      </div>
      
      <div className="project-preview-container">
        <ProjectPreviewNav />
      </div>

    </div>

  </div>

);

export default Home;
