import { Card, Image, Group } from '@mantine/core'
import { indoorHobbies, outdoorHobbies } from "../data/hobbiesData";
import { HobbiesComponent } from "./HobbiesComponent";
import { HobbiesInterface } from '../interfaces/HobbiesInterface.ts';
import React from "react";

interface Props {
    data: HobbiesInterface[];
}

const HobbiesTable: React.FC<Props> = () => {
    return (
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
    );
};

export default HobbiesTable;
