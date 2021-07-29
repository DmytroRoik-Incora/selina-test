import axios from 'axios';
import { LocationEndpoints } from './endpoints';
import { LocationEvent, LocationItem } from './types';

export const getAllLocation = () => axios.get<LocationItem[]>(LocationEndpoints.allLocations);

export const getLocationById = (id: string) => axios.get<LocationEvent[]>(LocationEndpoints.locationById(id));
