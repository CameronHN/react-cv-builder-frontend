import { HobbiesInterface } from "../interfaces/HobbiesInterface";
import { Accordion } from '@mantine/core';

interface HobbiesComponentProps {
    data: HobbiesInterface[];
    title: string;
}

export const HobbiesComponent: React.FC<HobbiesComponentProps> = ({ data, title }) => (
    // Accordion component to display the hobbies, mapping through the hobby item
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
