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

  const getSmartFitLocations = async () => {
    try {
      const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
      const { locations }: ApiResponse = await response.json();
      handleFilterByUser(locations);
    } catch (error) {
      console.error('Error fetching SmartFit locations:', error);
    }
  };

  function handleFilterByUser(locations: Location[]) {  
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
                    if (filterRadioValue === 'Manhã' && parseInt(startHour) >= 6 || parseInt(endHour) <= 12) {
                        acc.push(location);
                    } else if (filterRadioValue === 'Tarde' && parseInt(startHour) >= 12 || parseInt(endHour) <= 18) {
                        acc.push(location);
                    } else if (filterRadioValue === 'Noite' && parseInt(startHour) >= 18 || parseInt(endHour) <= 23) {
                        acc.push(location);
                    }
                }
            });
        }
        return acc; 
    }, []);
    return setFoundSmartLocations(filteredLocations);
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
