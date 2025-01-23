import { Card, Image, Group } from '@mantine/core'
import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'; // Import accordion components from react-accessible-accordion

// Define the interface
interface Hobbies {
    value: string;
    description: string;
}

// Sample data
const indoorHobbies: Hobbies[] = [
    {
        value: 'Automation/Scripting',
        description:
            'My passion for automation and scripting stems from the desire to enhance efficiency, consistency, and innovation in my work. Automation allows me to streamline repetitive tasks, ensuring accurate and consistent results every time while freeing up time for more creative endeavors. It challenges me to design solutions that make systems run smoothly and scale effortlessly.',
    },
    {
        value: 'Hackathon',
        description:
            'Additionally, participating in hackathons fuels my collaborative spirit and creativity, offering opportunities to think outside the box, learn new technologies, and connect with like-minded individuals. The competitive nature of hackathons pushes me to improve my skills, solve real-world problems, and expand my professional network, making these events an invaluable part of my personal and professional growth',
    }
];

const outdoorHobbies: Hobbies[] = [
    {
        value: 'Rugby',
        description:
            'My passion for rugby comes from the intense physical challenge and the camaraderie it fosters. The sport demands teamwork, strategic thinking, and resilience, which drive me to push my physical and mental limits. Playing rugby not only keeps me fit and healthy but also helps me develop strong bonds with my teammates, teaching me valuable lessons in discipline, teamwork, and leadership.',
    },
    {
        value: 'Marathons',
        description:
            'Running marathons is a hobby that fuels my determination and perseverance. The rigorous training process and the accomplishment of crossing the finish line provide a profound sense of achievement. Participating in marathons allows me to set and conquer personal goals, improve my physical health, and experience the exhilaration of being part of a supportive and inspiring community of runners.',
    },
    {
        value: 'Hiking',
        description:
            'Hiking offers me a serene escape into nature, providing both physical exercise and mental relaxation. Exploring different trails and landscapes helps me connect with the natural world and appreciate its beauty. Hiking challenges me to navigate diverse terrains and adapt to varying conditions, fostering a sense of adventure and resilience while promoting overall well-being.',
    },
];

const Hobbies = () => {
    const HobbiesComponent: React.FC<{ data: Hobbies[], title: string }> = ({ data, title }) => (
        // allowZeroExpanded allows the accordion to be collapsible
        < Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                        {
                            data.map((hobbiesSet, index) => (
                                <div key={index}>
                                    <b>{hobbiesSet.value}</b>
                                    <p>{hobbiesSet.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion >
    );

    return (
        <>
            <h2>Hobbies</h2>
            <table width="80%" align="center">
                <tr>
                    <td>
                        {/* Card for indoor activities */}
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src="/OIP (1).jpg"
                                    height={200}
                                />
                            </Card.Section>
                            <Group>
                                <HobbiesComponent data={indoorHobbies} title='Indoor Activities' />
                            </Group>
                        </Card>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* Card for outdoor activities */}
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src="/on-the-need-to-touch-grass.jpg"
                                    height={160}
                                />
                            </Card.Section>
                            <Group>
                                <HobbiesComponent data={outdoorHobbies} title='Outdoor Activities' />
                            </Group>
                        </Card>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default Hobbies
