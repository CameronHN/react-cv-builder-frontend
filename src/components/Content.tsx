import { useState } from 'react';
import Home from './Home';
import Details from './Details';
import Hobbies from './Hobbies';
import Projects from './Projects'
import Contact from './Contact';

const Content = () => {

    const [currentPage, setCurrentPage] = useState<"home" | "details" | "projects" | "hobbies" | "contact">("home");

    const renderPageContent = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "details":
                return <Details />;
            case "projects":
                return <Projects />;
            case "hobbies":
                return <Hobbies />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    }

    return (
        <>
            <nav>
                <button onClick={() => setCurrentPage("home")}>Home</button>
                <button onClick={() => setCurrentPage("details")}>Details</button>
                <button onClick={() => setCurrentPage("projects")}>Projects</button>
                <button onClick={() => setCurrentPage("hobbies")}>Hobbies</button>
                <button onClick={() => setCurrentPage("contact")}>Contact</button>
                <a href="https://github.com" target='_blank'><button value="GitHub">GitHub</button></a>
                <a href="src\file\Test_document.pdf" download><button value="Download mt CV">Download my CV</button></a>
            </nav>

            <main>
                {renderPageContent()}
            </main>
        </>
    )
}

export default Content
