import { IProject } from "../../interfaces/IProject";

// Component to display the project data
export const ProjectComponent: React.FC<{ data: IProject[] }> = ({ data }) => (
    <div>
        {
            data.map((projectSet, index) => (
                <div key={index}>
                    <h3>{projectSet.name}</h3>
                    <p>{projectSet.date}</p>
                    <b>Stack:</b>
                    {projectSet.stack.map((stack) => (
                        <div>{stack}</div>
                    ))}
                    <br />
                    <b>Description:</b>
                    {projectSet.description.map((description) => (
                        <div>{description}</div>
                    ))}
                    <br />
                    <b>Preview:</b>
                    <p><iframe src={projectSet.preview} /></p>
                </div>
            ))
        }
        <br />
    </div>
);

export default ProjectComponent;