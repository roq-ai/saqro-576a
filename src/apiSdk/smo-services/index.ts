import axios from 'axios';
import queryString from 'query-string';
import { SmoServiceInterface, SmoServiceGetQueryInterface } from 'interfaces/smo-service';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSmoServices = async (
  query?: SmoServiceGetQueryInterface,
): Promise<PaginatedInterface<SmoServiceInterface>> => {
  const response = await axios.get('/api/smo-services', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSmoService = async (smoService: SmoServiceInterface) => {
  const response = await axios.post('/api/smo-services', smoService);
  return response.data;
};

export const updateSmoServiceById = async (id: string, smoService: SmoServiceInterface) => {
  const response = await axios.put(`/api/smo-services/${id}`, smoService);
  return response.data;
};

export const getSmoServiceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/smo-services/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSmoServiceById = async (id: string) => {
  const response = await axios.delete(`/api/smo-services/${id}`);
  return response.data;
};
