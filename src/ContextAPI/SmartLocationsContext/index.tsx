'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ApiResponse, Location } from '../../types/DataAPI';

import { SmartFitContextType, SmartFitProviderProps } from './types';

const SmartFitContext = createContext<SmartFitContextType | undefined>(undefined);

export const useSmartFitContext = () => {
  const context = useContext(SmartFitContext);
  if (!context) {
    throw new Error('useSmartFitContext must be used within a SmartFitProvider');
  }
  return context;
};

export const SmartFitProvider: React.FC<SmartFitProviderProps> = ({ children }) => {
  const [filterRadioValue, setFilterRadioValue] = useState<string>('');
  const [displayLocationsClosed, setDisplayLocationsClosed] = useState<boolean>(false);
  const [totalLocationsFound, setTotalLocationsFound] = useState<number>(0);
  const [foundSmartLocations, setFoundSmartLocations] = useState<Location[]>([]);

  async function getSmartFitLocations(): Promise<void> {
    try {
      const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
      const { locations }: ApiResponse = await response.json();
      handleFilterByUser(locations);
    } catch (error) {
      console.error('Error fetching SmartFit locations:', error);
    }
  };

  function handleFilterByUser(locations: Location[]): void {  
    if (filterRadioValue === '' && !displayLocationsClosed) {
      const filteredLocations = locations.filter(location => location.opened);
      return setFoundSmartLocations(filteredLocations);
    }

    if (filterRadioValue === '' && displayLocationsClosed)
      return setFoundSmartLocations(locations);

    const currentSchedule = getCurrentDay();
      
    const filteredLocations = locations.reduce((acc: Location[], location: Location) => {
        let schedule;
        if (displayLocationsClosed)
          schedule = location?.schedules?.filter(schedule => schedule.weekdays === currentSchedule);
        else 
          schedule = location?.schedules?.filter(schedule => schedule.weekdays === currentSchedule && location.opened);

        if (schedule) {
            schedule.forEach(scheduleItem => {
                if (scheduleItem.hour !== 'Fechada') {
                    const [start, end] = scheduleItem.hour.split(' às ');
                    const [startHour] = start.split('h');
                    const [endHour] = end.split('h');
                    const parsedStartHour = parseInt(startHour);
                    const parsedEndHour = parseInt(endHour) === 0 ? 24 : parseInt(endHour);

                    const openMorning = parsedStartHour >= 6 && parsedEndHour <= 12;
                    const openAfternoon = parsedStartHour < 18 && parsedEndHour > 12;
                    const openNight = parsedStartHour < 24 && parsedEndHour > 18;
                    
                    if (filterRadioValue === 'Manhã' && openMorning) {
                      acc.push(location);
                  } else if (filterRadioValue === 'Tarde' && openAfternoon) {
                      acc.push(location);
                  } else if (filterRadioValue === 'Noite' &&  openNight) {
                      acc.push(location);
                  }
                } else {
                    if (displayLocationsClosed) {
                      acc.push(location);
                    }
                }
            });
        }
        return acc; 
    }, []);
   setFoundSmartLocations(filteredLocations);
  }

  function getCurrentDay(): string {
    const currentDay = new Date().getDay();

    if(currentDay > 0 && currentDay < 6)
      return 'Seg. à Sex.';
    else if (currentDay === 6) 
      return 'Sáb.';
    else 
      return 'Dom.';
  }

  useEffect(() => {
    setTotalLocationsFound(foundSmartLocations.length);
  }, [foundSmartLocations]);

  const value: SmartFitContextType = {
    filterRadioValue,
    displayLocationsClosed,
    totalLocationsFound,
    foundSmartLocations,
    setFilterRadioValue,
    setDisplayLocationsClosed,
    getSmartFitLocations
  };

  return (
    <SmartFitContext.Provider value={value}>
      {children}
    </SmartFitContext.Provider>
  );
};
