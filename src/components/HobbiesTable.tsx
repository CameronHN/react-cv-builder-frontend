import { Card, Image, Group, Table } from '@mantine/core'
import { indoorHobbies, outdoorHobbies } from "../data/hobbiesData";
import { HobbiesComponent } from "./HobbiesComponent";
import { HobbiesInterface } from '../interfaces/HobbiesInterface.ts';
import React from "react";

interface Props {
    data: HobbiesInterface[];
}

const HobbiesTable: React.FC<Props> = () => {
    return (
        <Table width="80%" align="center">
            <Table.Tr>
                <Table.Td>
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
                </Table.Td>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>
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
                </Table.Td>
            </Table.Tr>
        </Table>
    );
};

export default HobbiesTable;
