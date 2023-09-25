interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Manager'],
  tenantName: 'Agency',
  applicationName: 'SAQRO',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read agency information',
    'Read service details',
    'Make service bookings',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage agency data',
    'Manage SEO services',
    'Manage SMO services',
    'Manage SAAS services',
    'Manage email marketing services',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b23779f6-c7e3-4af1-80f0-492a1b2d74c3',
};
