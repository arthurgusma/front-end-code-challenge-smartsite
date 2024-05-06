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
    // todo order
    setFoundSmartLocations(locations);
  }

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
