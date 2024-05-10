import { ReactNode } from "react";
import { Location } from '../../types/DataAPI';

export interface SmartFitContextType {
    filterRadioValue: string;
    displayLocationsClosed: boolean;
    totalLocationsFound: number;
    foundSmartLocations: Location[];
    notFound: boolean
    setFilterRadioValue: (value: string) => void;
    setDisplayLocationsClosed: (value: boolean) => void;
    getSmartFitLocations: () => Promise<void>;
  }
  
export interface SmartFitProviderProps {
    children: ReactNode;
  }