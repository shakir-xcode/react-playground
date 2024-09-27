import React from 'react'
import logo from "../../assets/react.svg";
import classes from "./ProjectCard.module.css";


const ProjectCard = () => {
    console.log(classes)
    
  return (
<div className={`${classes.card_container}`}>
  <div className={` ${classes.card_rotate}`}>
    <div className={`${classes.card_face} ${classes.card_font}`}>
    <img src={logo} 
        alt='project-img' 
        className='w-full h-full'
        />
    </div>
    <div className={`${classes.card_face} ${classes.card_back}`}>Back</div>
  </div>
</div>
  )
}

export default ProjectCard