import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import "./AddPhotos.css";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    alignItems: "center",
  },
  addTitle: {
    marginTop: "8rem",
    fontSize: "4.375rem",
    fontFamily: "Comfortaa, cursive",
  },
  speedDial: {
    position: "relative",
  },
  SpeedDialAction1: {
    position: "absolute",
    left: "41%",
    top: "6%",
  },
  SpeedDialAction2: {
    position: "absolute",
    right: "41%",
    top: "6%",
  },
}));

// const actions = [
//   { icon: <FileCopyIcon />, name: "Copy" },
//   { icon: <SaveIcon />, name: "Save" },
// ];

const AddPhotos = () => {
  const classes = useStyle();

  // const [direction, setDirection] = React.useState("left");
  const [open, setOpen] = React.useState(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.addTitle} variant="h2">
        Add Your Pictures
      </Typography>

      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClick={toggleHandler}
        open={open}
        // direction="disabled"
        FabProps={{ style: { backgroundColor: "#FFCA62", color: "black" } }}
      >
        <SpeedDialAction
          className={classes.SpeedDialAction1}
          key="Attach File"
          icon={<AttachmentOutlinedIcon />}
          tooltipTitle="Attach File"
          // onClick={handleClose}
          tooltipPlacement="left"
        />

        <SpeedDialAction
          className={classes.SpeedDialAction2}
          key="Take Picture"
          icon={<AddAPhotoOutlinedIcon />}
          tooltipTitle="Take Picture"
          // onClick={handleClose}
          tooltipPlacement="right"
        />
      </SpeedDial>
    </div>
  );
};

export default AddPhotos;
