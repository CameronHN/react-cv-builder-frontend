import { SkillsInterface } from "../interfaces/SkillsInterface";

export const SkillsComponent: React.FC<{ data: SkillsInterface[] }> = ({ data }) => (
    <div>
        {
            data.map((skillSet, index) => (
                <div key={index}>
                    <h3>{skillSet.skillType}</h3>
                    {skillSet.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>{skill}</div>
                    ))}
                </div>
            ))
        }
        <br />
    </div>
);

export default SkillsComponent;