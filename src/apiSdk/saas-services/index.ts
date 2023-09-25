import axios from 'axios';
import queryString from 'query-string';
import { SaasServiceInterface, SaasServiceGetQueryInterface } from 'interfaces/saas-service';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSaasServices = async (
  query?: SaasServiceGetQueryInterface,
): Promise<PaginatedInterface<SaasServiceInterface>> => {
  const response = await axios.get('/api/saas-services', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSaasService = async (saasService: SaasServiceInterface) => {
  const response = await axios.post('/api/saas-services', saasService);
  return response.data;
};

export const updateSaasServiceById = async (id: string, saasService: SaasServiceInterface) => {
  const response = await axios.put(`/api/saas-services/${id}`, saasService);
  return response.data;
};

export const getSaasServiceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/saas-services/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSaasServiceById = async (id: string) => {
  const response = await axios.delete(`/api/saas-services/${id}`);
  return response.data;
};
