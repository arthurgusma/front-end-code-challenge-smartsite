import Image from "next/image";
import { DescriptionItemProps } from "./types";

export default function DescriptionItem({ title, itens }: DescriptionItemProps){
    return (
        <div className="text-center" >
         <h1 className="font-gotham-black mb-4">{title}</h1>
         <div className="xl:flex justify-center">
            {itens.map((item, index) => {
              return (
                 <div key={index} className="m-auto text-base text-xs sm:text-base">
                    <div className="flex justify-center">
                        <Image src={item.image} alt={`${item.description} ilustration`} className="size-16" />
                    </div>
                     <p >{item.description}</p>
                 </div>
                 )
            })}
         </div>
        </div>
    )
}