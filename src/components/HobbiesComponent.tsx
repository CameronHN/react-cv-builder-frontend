import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { HobbiesInterface } from "../interfaces/HobbiesInterface";

export const HobbiesComponent: React.FC<{ data: HobbiesInterface[], title: string }> = ({ data, title }) => (
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

export default HobbiesComponent;
