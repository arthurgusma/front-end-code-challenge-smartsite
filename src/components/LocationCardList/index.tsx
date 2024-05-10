'use client';
import { useSmartFitContext } from '@/ContextAPI/SmartLocationsContext';

import LocationCard from "./LocationCard";

export default function LocationCardList() {
    const { foundSmartLocations } = useSmartFitContext();

    return (
        <section className='flex justify-center'>
            <div className='flex w-2/3 '>
                {foundSmartLocations.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>
        </section>
    );
}