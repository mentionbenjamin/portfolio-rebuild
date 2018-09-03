import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";

const Frogging = () => (
  <div>
    <SidePanel
           header="
                  Froggin' Around
                  "
          caption="
                  Rationalise three graffiti tags as brand or corporate logos.
                  "
      description="
                  As a way to kickstart final year, we had two weeks to interpret three graffiti tags as brand or corporate logos—here is part one of three.
                  Due to the experimental nature of the brief, the aim was to have a bit of fun whilst exploring how to get the public involved in idea generation.
                  ~\n
                  The outcome proved to be an enlightening experiment exploring the manipulation of a single character face, introducing me to new ideas for communicating the personality of a brand.

                  Inviting passers-by to express themselves through pen to paper proved to be an insightful experiment. In a way, it gave back to the public and humanised the way in which a consumer can connect with a brand.
                  "
           footer="
                  mentionbenjamin
                  "
    />
    <ProjectPreviewNav />
  </div>
);



export default Frogging;

{/* <ImageScroller imageUrls={['', '']}/> */}
