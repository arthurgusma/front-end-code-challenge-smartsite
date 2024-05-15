'use client';
import { useSmartFitContext } from '@/ContextAPI/SmartLocationsContext';

import LocationCard from "./LocationCard";

export default function LocationCardList() {
    const { foundSmartLocations, notFound } = useSmartFitContext();
    console.log(notFound);

    return (
        <section className='grid sm:flex justify-center'>
            <div className='grid sm:flex overflow-x-auto overflow-y-hidden px-[-4rem]'>
                {notFound ? 
                <div className='flex justify-center m-auto pb-8'>
                    <p>Nenhuma unidade encontrada</p>
                </div>
                : foundSmartLocations.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>
        </section>
    );
}