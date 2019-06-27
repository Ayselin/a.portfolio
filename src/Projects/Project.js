import React from "react";

const Project = ({ title, link, img, description }) => (
    <div className='projects-container1'>
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
        >
            <img className='project-kodflix' src={img} alt='guthub'></img>
        </a>    
        <h2>{title}</h2>
        <p className='project-description'>{description}</p>
    </div>
)

export default Project