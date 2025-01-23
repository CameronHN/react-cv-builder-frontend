import { skillsData } from "./Details";
import Headshot from "./Headshot";
import { projectsData } from "./Projects";

// Define the interfaces
interface Person {
    firstName: string;
    lastName: string;
}

interface Introduction {
    profession: string;
    location: string;
    specialisation: string;
    passion: string;
    yearsOfExperience: number;
}

interface About {
    recentInstitute: string;
    major: string;
}

// Flatten and sort all the skills data into a single array of strings
const skillsArr: string[] = skillsData.flatMap(skill => skill.skills).sort();

const personDetails: Person = {
    firstName: "Jane",
    lastName: "Doe"
}

const introductionDetails: Introduction = {
    profession: "Web Developer",
    location: "Cape Town, South Africa",
    specialisation: "Front-End Development",
    passion: "creating beautiful and responsive websites",
    yearsOfExperience: 5,
}

const aboutDetails: About = {
    recentInstitute: "the University of Cape Town",
    major: "Computer Science"
}

// Generate a personal greeting on the landing page
function personalGreeting(details: Person) {
    return "Hello, I'm " + details.firstName + "  " + details.lastName
}

// Generate a introduction on the landing page
function introduction(details: Introduction) {
    return "I'm a " + details.profession + " based in " + details.location + ". I specialize in " + details.specialisation + " and have a passion for " + details.passion + ". With " + details.yearsOfExperience + " years of experience, I bring a unique blend of creativity and technical skills to every project."
}

// Generate an about section on the landing page
function about(details: About) {
    return "I graduated from " + details.recentInstitute + " with a degree in " + details.major + ". Over the years, I've had the privilege to work with amazing clients and companies, which has allowed me to grow both professionally and personally."
}

const Home = () => {
    return (
        <>
            {/* Display headshot */}
            <Headshot />

            <h2>{personalGreeting(personDetails)}</h2>

            <p>{introduction(introductionDetails)}</p>

            <h2>About Me</h2>

            <p>{about(aboutDetails)}</p>

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
