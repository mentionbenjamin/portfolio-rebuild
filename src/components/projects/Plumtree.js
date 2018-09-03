import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";

const Plumtree = () => (
  <div>

    <div className="side-panel-container">
      <SidePanel
             header="
                    Plumtree
                    "
            caption="
                    Rationalise three graffiti tags as brand or corporate logos.
                    "
        description="Tamen imitarentur singulis tamen appellat e aut veniam summis dolor laborum,
                    appellat exquisitaque, nisi ab quo aute cernantur.Nostrud firmissimum qui
                    vidisse qui aut irure transferrem, aliquip e duis iis aliqua mandaremus
                    excepteur, quo esse relinqueret
                    <br></br>
                    <br></br>
                    Anim pariatur appellat si iis fugiat minim aut
                    eiusmod, dolor pariatur de singulis. Ex officia cohaerescant, duis consectetur
                    probant elit litteris. Excepteur minim nescius laboris quo nescius si veniam."
        footer="this is the footer"
      />
    </div>

    <ProjectPreviewNav />

  </div>
);

export default Plumtree;
