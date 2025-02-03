import { Image } from "@mantine/core";

const imageUrl: string = "src/assets/download.jpg";

const Headshot: React.FC = () => {
    return (
        <>
            <Image src={imageUrl} alt="Headshot" className="headshot" />
        </>
    );
};

export default Headshot
