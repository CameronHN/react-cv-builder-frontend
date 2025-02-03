import { Anchor, Button } from "@mantine/core";
import { ISocialMedia } from "../../interfaces/ISocialMedia";

export const SocialMediaComponent: React.FC<{ data: ISocialMedia[] }> = ({ data }) => (
    <>
        <h2>Reach out to me!</h2>

        {data.map((socialMedia) => (
            // Using Mantine's anchor component to link to the appropriate sites
            <Anchor href={socialMedia.link} target="_blank">
                <Button variant="default" leftSection={<socialMedia.icon size={14} />}>   {socialMedia.name}
                </Button>
            </Anchor>
        ))}
    </>
);

export default SocialMediaComponent;
