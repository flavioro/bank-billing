import { boleto } from "../services/boleto.mjs";

export default class BillingController {
  async show(request, response) {
    const { billing } = request.params;

    const _billing = await boleto(billing);

    return response.json(_billing);
  }
}
