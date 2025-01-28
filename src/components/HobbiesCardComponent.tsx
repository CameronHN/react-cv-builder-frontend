import { Card, Image, Group } from "@mantine/core";
import { indoorHobbies, outdoorHobbies } from "../data/hobbiesData.ts";
import { HobbiesComponent } from "./HobbiesComponent.tsx";
import React from "react";

// Component to populate Card with the Hobbies (Displays in an Accordion)
const HobbiesCardComponent: React.FC = () => {
    return (
        <>
            {/* Card for indoor activities */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src="/OIP (1).jpg" height={200} />
                </Card.Section>
                <Group>
                    <HobbiesComponent data={indoorHobbies} title="Indoor Activities" />
                </Group>
            </Card>

            <br />

            {/* Card for outdoor activities */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src="/on-the-need-to-touch-grass.jpg" height={160} />
                </Card.Section>
                <Group>
                    <HobbiesComponent data={outdoorHobbies} title="Outdoor Activities" />
                </Group>
            </Card>
        </>
    );
};

export default HobbiesCardComponent;
