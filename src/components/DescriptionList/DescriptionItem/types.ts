import { StaticImageData } from "next/image";

export interface DescriptionItemProps {
    title: string,
    itens: {
        description: string,
        image: StaticImageData,
    }[],
}