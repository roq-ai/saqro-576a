import { AgencyInterface } from 'interfaces/agency';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SeoServiceInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  duration?: any;
  agency_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  agency?: AgencyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SeoServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  agency_id?: string;
  user_id?: string;
}
