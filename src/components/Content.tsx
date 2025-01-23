import { useState } from 'react';
import Home from './Home';
import Details from './Details';
import Hobbies from './Hobbies';
import Projects from './Projects'
import Contact from './Contact';

const Content = () => {

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
            {/* Navigation bar with buttons to change the current page */}
            <nav>
                <button onClick={() => setCurrentPage("home")}>Home</button>
                <button onClick={() => setCurrentPage("details")}>Details</button>
                <button onClick={() => setCurrentPage("projects")}>Projects</button>
                <button onClick={() => setCurrentPage("hobbies")}>Hobbies</button>
                <button onClick={() => setCurrentPage("contact")}>Contact</button>
                <a href="https://github.com" target='_blank'><button value="GitHub">GitHub</button></a>
                <a href="src\file\Test_document.pdf" download><button value="Download my CV">Download my CV</button></a>
            </nav>

            {/* Main content area where the current page content is rendered */}
            <main>
                {renderPageContent()}
            </main>
        </>
    )
}

export default Content
