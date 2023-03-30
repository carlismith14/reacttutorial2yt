import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Services = () => {
  return (
    <div>
        <Pricing></Pricing>
      <InfoSection {...homeObjFour} />
    </div>
  );
};

export default Services;
