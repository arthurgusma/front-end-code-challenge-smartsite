'use client';
import { useSmartFitContext } from '@/ContextAPI/SmartLocationsContext';

import LocationCard from "./LocationCard";

export default function LocationCardList() {
    const { foundSmartLocations, notFound } = useSmartFitContext();

    return (
        <section className='flex justify-center'>
            <div className='flex overflow-x-auto overflow-y-hidden px-[-4rem]'>
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