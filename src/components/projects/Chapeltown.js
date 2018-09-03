import React from "react";
import ProjectPreviewNav from "../ProjectPreviewNav";
import SidePanel from "../../containers/SidePanel";

const Chapeltown = () => (

  <div>

    <div className="side-panel-container">
      <SidePanel
             header="
                    Chapeltown Arts Festival
                    "
            caption="
                    Redesign the publicity material for a week-long festival promoting creativity in Chapeltown.
                    "
        description="
                    After piloting in 2014, Chapeltown Arts Festival is back for the third year; making its mark on promoting and encouraging the arts and creativity in the Chapeltown area in north-east Leeds.
                    Being a charity funded organisation they approached our university inviting us to redesign the promotional material for the week-long creative extravaganza.

                    The client requested a solution that was cost-effective and that could serve as a souvenir of the event as a way of not wasting paper. I created a pair of leaflets where you can read, cut & stick your way to building your very own kirigami pencil or ghettoblaster model, as a way of promoting the creative philosophy and Afro-Jamaican roots of the festival.

                    The experimental design of the leaflet invited the public to get involved in the festival in a crafty, whimsical way. Using an A5 layout and a single colour format kept costs low and allowed the option of using different coloured paper to print on; as a way of connecting with the diverse area of Chapeltown.
                    "
             footer="
                    mentionbenjamin
                    "
      />
    </div>

    <ProjectPreviewNav />

  </div>
);

export default Chapeltown;
