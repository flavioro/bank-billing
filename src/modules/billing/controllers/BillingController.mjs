// import { boletoBancarioLinhaDigitavel } from "../services/boleto-bancario.mjs";
import { boleto } from "../services/boleto.mjs";
// const {
//   boletoBancario,
//   boletoBancarioCodigoBarras,
//   boletoBancarioLinhaDigitavel,
// } = require("../services/boleto-bancario.mjs");

export default class ProjetoController {
  async show(request, response) {
    const { billing } = request.params;
    // console.log(billing);

    const projeto = await boleto(billing);

    return response.json(projeto);
  }
}
