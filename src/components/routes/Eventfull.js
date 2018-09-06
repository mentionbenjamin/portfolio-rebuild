import React from "react";
import ImageScroller from "../ImageScroller";
import SidePanel from "../../containers/SidePanel";
import EventfullData from '../data/EventfullData';


console.log(EventfullData.imageUrls)

const Home = () => (

  <div className="page-container">

    <div className="layout">

      <div className="side-panel-container">
        <SidePanel header={EventfullData.header}
                  caption={EventfullData.caption}
                  details={EventfullData.details}
              description={EventfullData.description}
                     link={EventfullData.link}
                   footer={EventfullData.footer}
        />
      </div>

      <div className="project-preview-container">
        <ImageScroller urls={EventfullData.imageUrls} />
      </div>

    </div>

  </div>

);

export default Home;
