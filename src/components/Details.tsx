import React from 'react'

// Define the interfaces
interface Experience {
    role: string;
    date: string;
    responsibilities: string[];
}

interface Education {
    institute: string;
    qualification: string;
    dateOfGraduation: string;
    major: string[];
}

interface Skill {
    skillType: string;
    skills: string[];
}

// Sample data for the details
const experienceData: Experience[] = [
    {
        role: "Software Developer at Tech Solutions Inc.",
        date: "Jan 2020 - Present",
        responsibilities: [
            "Developed and maintained web applications using JavaScript, React, and Node.js.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions.",
            "Implemented RESTful APIs and integrated third-party services."
        ]
    },
    {
        role: "Marketing Coordinator at Creative Agency",
        date: "Jun 2017 - Dec 2019",
        responsibilities: [
            "Managed social media campaigns and increased engagement by 30%.",
            "Coordinated promotional events and press releases.",
            "Analyzed marketing data to optimize campaign performance."
        ]
    }
];

const educationData: Education[] = [
    {
        institute: 'University of Cape Town',
        qualification: 'Bachelor of Science in Computer Science',
        dateOfGraduation: 'December 2023',
        major: [
            'Software Engineering',
            'Information Systems']
    },
    {
        institute: 'Rhodes University',
        qualification: 'Bachelor of Science in Biology',
        dateOfGraduation: 'May 2023',
        major: []
    }
];

export const skillsData: Skill[] = [
    {
        skillType: "Programming Languages",
        skills: [
            'JavaScript',
            'Python',
            'Java'
        ]
    },
    {
        skillType: "Database Management",
        skills: [
            'SQL',
            'MongoDB'
        ]
    },
    {
        skillType: "Marketing",
        skills: [
            'Social Media Management',
            'SEO',
            'Content Creation'
        ]
    },
    {
        skillType: "Project Management",
        skills: [
            'Agile',
            'Scrum'
        ]
    }
];

// Components to display the details
const ExperienceComponent: React.FC<{ data: Experience[] }> = ({ data }) => (
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

const SkillsComponent: React.FC<{ data: Skill[] }> = ({ data }) => (
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

const EducationComponent: React.FC<{ data: Education[] }> = ({ data }) => (
    <div>
        {
            data.map((educationSet, index) => (
                <div key={index}>
                    <h3>{educationSet.institute}</h3>
                    <p>{educationSet.qualification}, {educationSet.dateOfGraduation}</p>
                    <b>Majors:</b>
                    {educationSet.major.map((major) => (
                        <div>{major.length != 0 ? major : "None"}</div>
                    ))}
                </div>
            ))
        }
    </div>
)

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
