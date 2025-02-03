import { IExperience } from "../../../interfaces/IExperience";

export const ExperienceComponent: React.FC<{ data: IExperience[] }> = ({ data }) => (
    <div>
        {
            data.map((experienceSet, index) => (
                <div key={index}>
                    <h3>{experienceSet.role}</h3>
                    <p>{experienceSet.date}</p>
                    {experienceSet.responsibilities.map((role) => (
                        <div>{role}</div>
                    ))}
                    <br />
                </div>
            ))
        }
    </div>
);

export default ExperienceComponent;
