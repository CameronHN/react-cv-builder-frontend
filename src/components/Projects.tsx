import { projectsData } from '../data/projectData';
import ProjectComponent from './ProjectComponent';

const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
            <div>
                <ProjectComponent data={projectsData} />
            </div>
        </>
    );
};

export default Projects
