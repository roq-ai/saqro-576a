import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { agencyValidationSchema } from 'validationSchema/agencies';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getAgencies();
    case 'POST':
      return createAgency();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAgencies() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.agency
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'agency'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createAgency() {
    await agencyValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.email_marketing_service?.length > 0) {
      const create_email_marketing_service = body.email_marketing_service;
      body.email_marketing_service = {
        create: create_email_marketing_service,
      };
    } else {
      delete body.email_marketing_service;
    }
    if (body?.saas_service?.length > 0) {
      const create_saas_service = body.saas_service;
      body.saas_service = {
        create: create_saas_service,
      };
    } else {
      delete body.saas_service;
    }
    if (body?.seo_service?.length > 0) {
      const create_seo_service = body.seo_service;
      body.seo_service = {
        create: create_seo_service,
      };
    } else {
      delete body.seo_service;
    }
    if (body?.smo_service?.length > 0) {
      const create_smo_service = body.smo_service;
      body.smo_service = {
        create: create_smo_service,
      };
    } else {
      delete body.smo_service;
    }
    const data = await prisma.agency.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
