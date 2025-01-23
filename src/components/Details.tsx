import ExperienceComponent from './ExperienceComponent';
import SkillsComponent from './SkillsComponent';
import EducationComponent from './EducationComponent';
import { experienceData } from '../data/experienceData';
import { educationData } from '../data/educationData';
import { skillsData } from '../data/skillsData';

const Details = () => {
    return (
        <>
            <h2>Work Experience</h2>
            <div>
                <ExperienceComponent data={experienceData} />
            </div>
            <h2>Skills</h2>
            <div>
                <SkillsComponent data={skillsData} />
            </div>
            <h2>Education</h2>
            <div>
                <EducationComponent data={educationData} />
            </div>
        </>
    );
};

export default Details
