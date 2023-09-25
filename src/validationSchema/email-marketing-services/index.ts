import * as yup from 'yup';

export const emailMarketingServiceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  duration: yup.date().nullable(),
  agency_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
