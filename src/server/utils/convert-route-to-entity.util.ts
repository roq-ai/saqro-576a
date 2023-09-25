const mapping: Record<string, string> = {
  agencies: 'agency',
  'email-marketing-services': 'email_marketing_service',
  'saas-services': 'saas_service',
  'seo-services': 'seo_service',
  'smo-services': 'smo_service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
