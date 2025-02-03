import HobbiesCardComponent from './HobbiesCardComponent';
import { indoorHobbies, outdoorHobbies } from "../../data/hobbiesData.ts";


// Hobbies page
const Hobbies: React.FC = () => {
    return (
        <>
            <h2>Hobbies</h2>

            {/* Display the hobbies (Displays the Card) */}
            <HobbiesCardComponent
                image_src="/OIP (1).jpg"
                height={200}
                data={indoorHobbies}
                title="Indoor Activities" />

            <br />

            <HobbiesCardComponent
                image_src="/on-the-need-to-touch-grass.jpg"
                height={160}
                data={outdoorHobbies}
                title="Outdoor Activities"
            />
        </>
    );
};

export default Hobbies
