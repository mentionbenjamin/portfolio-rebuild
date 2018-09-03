import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";

const Home = () => (
  <div>
    <SidePanel
           header="
                  The aim is to cool, wow and move people through digital experiences.
                  "
      description="
                  Working between design & development, I find nothing more rewarding than cracking a clients puzzle in an inventive, effective way.

                  I am looking for an opportunity in an ambitious, lateral-thinking environment where I can grow and develop. Helping add value by building engaging digital solutions.
                  "
           footer="
                  this is the footer
                  "
    />
    <ProjectPreviewNav />

  </div>
);

export default Home;
