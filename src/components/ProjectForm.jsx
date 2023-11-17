import React, { useState } from 'react'
import classes from "./ProjectForm.module.scss";

export default function ProjectForm() {
    const [ projectName, setProjectName ] = useState("");
  return (
    <div className={classes["project"]}>
        <form>
            <input onChange={(event) => setProjectName(event.target.value)} className={classes["project__input"]} placeholder="Project name" type="text" name="projectName" id="projectName" />
            <label htmlFor="projectName" className={classes["project__label"]}>Project name</label>
            <button className={classes["project__btn"]}>Create Project &#43;</button>
        </form>
    </div>
  )
}
