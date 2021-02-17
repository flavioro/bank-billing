import { Router } from 'express';

import billingRouter from '@modules/billing/infra/http/routes/billing.routes';

const routes = Router();

routes.use('/boleto', billingRouter);

export default routes;