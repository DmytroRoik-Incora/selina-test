import { AxiosResponse } from 'axios';

export const transformResponse = <T>(res: AxiosResponse<T>) => {
  return res.data;
};
