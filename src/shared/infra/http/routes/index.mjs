import pkg from "express";

import billingRouter from "../../../../modules/billing/infra/http/routes/billing.routes.mjs";
const { Router } = pkg;

const routes = Router();

routes.use("/boleto", billingRouter);

export default routes;
