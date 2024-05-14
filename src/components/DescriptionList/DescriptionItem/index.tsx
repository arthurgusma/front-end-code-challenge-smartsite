import Image from "next/image";
import { DescriptionItemProps } from "./types";

export default function DescriptionItem({ title, itens }: DescriptionItemProps){
    return (
        <div className="text-center w-full lg:w-46 xl:w-52" >
         <h1 className="font-gotham-black mb-4">{title}</h1>
         <div className="flex justify-between">
            {itens.map((item, index) => {
              return (
                 <div key={index} className="m-auto mb-4 sm:mb-0">
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