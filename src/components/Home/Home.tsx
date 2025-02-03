import { skillsData } from '../../data/skillsData';
import Headshot from "./Headshot";
import { projectsData } from '../../data/projectData';
import { IPerson } from '../../interfaces/IPerson';
import { IIntroduction } from '../../interfaces/IIntroduction';
import { IAbout } from '../../interfaces/IAbout';
import { personData } from '../../data/personData';
import { introductionData } from '../../data/introductionData';
import { aboutData } from '../../data/aboutData';

// Flatten and sort all the skills data into a single array of strings
const skillsArr: string[] = skillsData.flatMap(skill => skill.skills).sort();

// Generate a personal greeting on the landing page
function personalGreeting(details: IPerson) {
    return `Hello, I'm ${details.firstName} ${details.lastName}`
}

// Generate a introduction on the landing page
function introduction(details: IIntroduction) {
    return `I'm a ${details.profession} based in ${details.location}. I specialize in ${details.specialisation} and have a passion for ${details.passion}. With ${details.yearsOfExperience} years of experience, I bring a unique blend of creativity and technical skills to every project.`
}

// Generate an about section on the landing page
function about(details: IAbout) {
    return `I graduated from ${details.recentInstitute} with a degree in ${details.major}. Over the years, I've had the privilege to work with amazing clients and companies, which has allowed me to grow both professionally and personally.`
}

const Home: React.FC = () => {
    return (
        <>
            <br />

            {/* Display headshot */}
            <Headshot />

            <h2>{personalGreeting(personData)}</h2>

            <p>{introduction(introductionData)}</p>

            <h2>About Me</h2>

            <p>{about(aboutData)}</p>

            <h2>Projects</h2>

            {projectsData.map((project, index) => (
                <div key={index}>
                    {project.name}
                </div>
            ))}

            <h2>Skills</h2>

            {skillsArr.map((skill, index) => (
                <div key={index}>
                    {skill}
                </div>
            ))}
        </>
    );
};

export default Home
