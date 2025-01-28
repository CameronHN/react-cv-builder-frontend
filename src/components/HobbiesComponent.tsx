import { HobbiesInterface } from "../interfaces/HobbiesInterface";
import { Accordion } from '@mantine/core';

export const HobbiesComponent: React.FC<{ data: HobbiesInterface[], title: string }> = ({ data, title }) => (
    <Accordion variant="separated" multiple>
        <Accordion.Item value="custom-accordion-item">
            <Accordion.Control>{title}</Accordion.Control>
            <Accordion.Panel>
                <div>
                    {data.map((hobbiesSet, index) => (
                        <div key={index}>
                            <b>{hobbiesSet.value}</b>
                            <p>{hobbiesSet.description}</p>
                        </div>
                    ))}
                </div>
            </Accordion.Panel>
        </Accordion.Item>
    </Accordion>
);

export default HobbiesComponent;
