import React from "react";

import { InfoSection } from "../../components";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Products = () => {
  return (
    <div>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </div>
  );
};

export default Products;
