import React from "react";
import { Typography } from "@material-ui/core";

const NoPictureMsg = () => {
  return (
    <div>
      <Typography variant="h4">
        No pictures to show!
        <Typography>please add some images</Typography>
      </Typography>
    </div>
  );
};

export default NoPictureMsg;
