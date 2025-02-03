import { projectsData } from '../../data/projectData';
import ProjectComponent from './ProjectComponent';

const Project: React.FC = () => {
    return (
        <>
            <h2>Projects</h2>
            <div>
                <ProjectComponent data={projectsData} />
            </div>
        </>
    );
};

export default Project
