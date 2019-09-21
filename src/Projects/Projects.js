import React from "react";
import './Projects.css';
import Project from'./Project'
import kodflix from '../img/kodflix.png';
import coding from '../img/codingwoman.png';


const myProjects = [{
    title: "KODFLIX",
    img: kodflix,
    link: "https://kodflix-aysel.herokuapp.com/",
    description: "",
}, {
    title: "8 Days a Week",
    img: coding,
    link: "https://kodiri.github.io/8-days-a-week/#/",
    description:"",
}]

const Projects = () => (
    <div className="projects" id='projects'>
        <h1 className='project-title'> My Projects </h1>
        <div className="project-container">
            {myProjects.map(project => (
                <Project {...project} />
            ))}
        </div>
    </div>
)



export default Projects;
