import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";

const Eventfull = () => (

  <div>

    <div className="side-panel-container">
      <SidePanel
             header="
                    Eventfull
                    "
            caption="
                    Single page web application allowing users to search for events by category, date, and location, then view their results on an interactive map.

                    Collaboration with Gregor Cox, James Amos & Iona Macbeth.
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
             footer="
                    mentionbenjamin
                    "
      />
    </div>

    <ProjectPreviewNav />

  </div>
);

export default Eventfull;
