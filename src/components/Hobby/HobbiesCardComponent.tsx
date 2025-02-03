import { Card, Image, Group } from "@mantine/core";
import { HobbiesComponent } from "./HobbiesComponent.tsx";
import React from "react";
import { IHobbiesCardProps } from "../../interfaces/IHobbiesCardProps.ts";


// Component to populate Card with the Hobbies (Displays in an Accordion)
const HobbiesCardComponent: React.FC<IHobbiesCardProps> = ({image_src, height, data, title}) => {
    return (
        <>
            {/* Card for indoor activities */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={image_src} height={height} />
                </Card.Section>
                <Group>
                    <HobbiesComponent data={data} title={title} />
                </Group>
            </Card>
        </>
    );
};

export default HobbiesCardComponent;
