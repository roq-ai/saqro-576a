import axios from 'axios';
import queryString from 'query-string';
import {
  EmailMarketingServiceInterface,
  EmailMarketingServiceGetQueryInterface,
} from 'interfaces/email-marketing-service';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmailMarketingServices = async (
  query?: EmailMarketingServiceGetQueryInterface,
): Promise<PaginatedInterface<EmailMarketingServiceInterface>> => {
  const response = await axios.get('/api/email-marketing-services', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmailMarketingService = async (emailMarketingService: EmailMarketingServiceInterface) => {
  const response = await axios.post('/api/email-marketing-services', emailMarketingService);
  return response.data;
};

export const updateEmailMarketingServiceById = async (
  id: string,
  emailMarketingService: EmailMarketingServiceInterface,
) => {
  const response = await axios.put(`/api/email-marketing-services/${id}`, emailMarketingService);
  return response.data;
};

export const getEmailMarketingServiceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/email-marketing-services/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteEmailMarketingServiceById = async (id: string) => {
  const response = await axios.delete(`/api/email-marketing-services/${id}`);
  return response.data;
};
