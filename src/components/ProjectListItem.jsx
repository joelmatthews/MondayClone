import React from 'react'

import classes from "./ProjectListItem.module.scss";

export default function TaskItem({projectInfo}) {
  return (
    <li className={classes.task__item}>{projectInfo.title}</li>
  )
}
