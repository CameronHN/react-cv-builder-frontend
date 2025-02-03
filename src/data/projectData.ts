import { IProject } from "../interfaces/IProject";

export const projectsData: IProject[] = [
    {
        name: "Weather App",
        date: 'January 2023 - March 2023',
        stack: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'OpenWeatherMap API'
        ],
        description: [
            'Developed a responsive weather forecasting application that fetches real-time weather data from the OpenWeatherMap API.',
            'Integrated search functionality allowing users to look up weather conditions by city name.',
            'Implemented features such as weather icons, temperature conversion, and a five-day forecast display.'
        ],
        preview: "https://www.youtube.com/embed/6BU_ELSsDLc"
    },
    {
        name: "E-commerce Platform",
        date: 'April 2023 - July 2023',
        stack: [
            'Python',
            'Django',
            'PostgreSQL',
            'Bootstrap'
        ],
        description: [
            'Built a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and order management system.',
            'Integrated a secure payment gateway for transactions.',
            'Implemented an admin dashboard for managing products, orders, and user accounts.'
        ],
        preview: "https://media.tenor.com/-mgjSBPiYd4AAAAC/what-have-i-done-regret.gif"
    },
    {
        name: "Personal Finance Tracker",
        date: 'November 2023 - December 2023',
        stack: [
            'Angular',
            'TypeScript',
            'Firebase'
        ],
        description: [
            'Developed a personal finance tracking application to help users manage their expenses and budgets.',
            'Integrated Firebase for real-time data storage and user authentication. ',
            'Implemented features such as expense categorization, budget tracking, and data visualization with charts.'
        ],
        preview: "https://www.youtube.com/embed/vSKRVbVg6l4"
    }
]
