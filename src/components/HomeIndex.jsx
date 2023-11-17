import React from "react";
import CreateNew from "./CreateNew";
import classes from "./HomeIndex.module.scss";


export default function HomeIndex() {
  return (
    <div className={classes.home}>
      <CreateNew />
    </div>
  );
}