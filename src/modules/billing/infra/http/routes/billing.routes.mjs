import pkg from "express";

import BillingController from "../controllers/BillingController.mjs";
const { Router } = pkg;

const billingRouter = Router();
const billingController = new BillingController();

billingRouter.get("/:billing", billingController.show);

export default billingRouter;
