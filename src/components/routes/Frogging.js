import React from "react";
import ImageScroller from "../ImageScroller";
import SidePanel from "../../containers/SidePanel";
import FroggingData from '../data/FroggingData';



const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={FroggingData.header}
                  caption={FroggingData.caption}
                  details={FroggingData.details}
              description={FroggingData.description}
                   footer={FroggingData.footer}
        />
      </div>

      {/* <div className="project-preview-container"> */}
        <ImageScroller urls={FroggingData.imageUrls} />
      {/* </div> */}

    </div>

  </div>

);

export default Home;
