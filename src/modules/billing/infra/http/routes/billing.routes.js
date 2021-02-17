import { Router } from 'express';

import BillingController from '../controllers/BillingController';

const billingRouter = Router();
const billingController = new BillingController();

billingRouter.get('/', billingController.show);

export default billingRouter;
