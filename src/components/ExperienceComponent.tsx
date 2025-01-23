import { ExperienceInterface } from "../interfaces/ExperienceInterface";

export const ExperienceComponent: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
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
