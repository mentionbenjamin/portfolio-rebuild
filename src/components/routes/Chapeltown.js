import React from "react";
import ImageScroller from "../ImageScroller";
import SidePanel from "../../containers/SidePanel";
import ChapeltownData from '../data/ChapeltownData';



const Chapeltown = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={ChapeltownData.header}
                  caption={ChapeltownData.caption}
                  details={ChapeltownData.details}
              description={ChapeltownData.description}
                   footer={ChapeltownData.footer}
        />
      </div>

      {/* <div className="project-preview-container"> */}
      <ImageScroller urls={ChapeltownData.imageUrls} />
      {/* </div> */}

    </div>

  </div>

);

export default Chapeltown;
