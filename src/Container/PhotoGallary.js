import React from "react";

import AddPhotos from "../Components/AddPhotos/AddPhotos";
import Aux from "../Hoc/Auxiliry";

const PhotoGallary = (props) => {
  return (
    <div>
      <Aux>
        <AddPhotos />
      </Aux>
    </div>
  );
};

export default PhotoGallary;
