import useSWR from 'swr';
import { getLocationById, LocationEndpoints } from '../api/locations';
import { transformResponse } from '../utils/api';

export const useLocationEvents = (id: string) => {
  const { data, error } = useSWR(LocationEndpoints.locationById(id), () =>
    getLocationById(id).then(transformResponse)
  );

  return {
    loading: !data && !error,
    data,
    error
  };
};
