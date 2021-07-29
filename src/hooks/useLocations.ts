import useSWR from 'swr';
import { getAllLocation, LocationEndpoints } from '../api/locations';
import { transformResponse } from '../utils/api';

export const useLocations = () => {
  const { data, error } = useSWR(LocationEndpoints.allLocations, () =>
    getAllLocation().then(transformResponse)
  );

  return {
    data,
    error
  };
};
