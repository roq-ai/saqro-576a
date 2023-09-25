import { EmailMarketingServiceInterface } from 'interfaces/email-marketing-service';
import { SaasServiceInterface } from 'interfaces/saas-service';
import { SeoServiceInterface } from 'interfaces/seo-service';
import { SmoServiceInterface } from 'interfaces/smo-service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgencyInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  email_marketing_service?: EmailMarketingServiceInterface[];
  saas_service?: SaasServiceInterface[];
  seo_service?: SeoServiceInterface[];
  smo_service?: SmoServiceInterface[];
  user?: UserInterface;
  _count?: {
    email_marketing_service?: number;
    saas_service?: number;
    seo_service?: number;
    smo_service?: number;
  };
}

export interface AgencyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
