import EducationComponent from './Education/EducationComponent';
import PositionComponent from './Experience/PositionComponent';
import UserSkillsWithTypeComponent from './Skills/UserSkillsWithTypeComponent';

const Details: React.FC = () => {
    return (
        <>
            <h2>Work Experience</h2>
            <div>
                <PositionComponent />
            </div>
            <h2>Skills</h2>
            <div>
                <UserSkillsWithTypeComponent />
            </div>
            <h2>Education</h2>
            <div>
                <EducationComponent />
            </div>
        </>
    );
};

export default Details
