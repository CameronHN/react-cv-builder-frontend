import { useState } from 'react';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Hobbies from '../Hobby/Hobbies';
import Project from '../Project/Project'
import Contact from '../Contact/Contact';
import GithubProjects from '../Project/GithubProjects';
import { Button, Anchor } from '@mantine/core';

const Content: React.FC = () => {

    // Initialise state variable currentPage with the initial value "home"
    const [currentPage, setCurrentPage] = useState<string>("home");

    // Render content based on the current page
    const renderPageContent = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "details":
                return <Details />;
            case "projects":
                return <Project />;
            case "github-projects":
                return <GithubProjects />;
            case "hobbies":
                return <Hobbies />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    }

    // Assign a page title to the current page
    const setPageTitle = (title: string) => {
        document.title = title;
    };

    return (
        <>
            {/* Navigation bar with buttons to change the current page */}
            <nav>
                <Button onClick={() => { setCurrentPage("home"); setPageTitle("Home") }}>Home</Button>
                <Button onClick={() => { setCurrentPage("details"); setPageTitle("Details") }}>Details</Button>
                <Button onClick={() => { setCurrentPage("projects"); setPageTitle("Projects") }}>Projects</Button>
                <Button onClick={() => { setCurrentPage("github-projects"); setPageTitle("Github Projects") }}>Github Projects</Button>
                <Button onClick={() => { setCurrentPage("hobbies"); setPageTitle("Hobbies") }}>Hobbies</Button>
                <Button onClick={() => { setCurrentPage("contact"); setPageTitle("Contact") }}>Contact</Button>
                <Anchor href="src\file\Test_document.pdf" target='_blank'><Button>View my CV</Button></Anchor>
            </nav>

            {/* Main content area where the current page content is rendered */}
            <main>
                {renderPageContent()}
            </main>
        </>
    )
}

export default Content
