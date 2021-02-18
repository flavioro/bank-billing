import { boletoArrecadacaoLinhaDigitavel } from "./boleto-arrecadacao.mjs";
import { boletoBancarioLinhaDigitavel } from "./boleto-bancario.mjs";
import clearMask from "../../../shared/tools/clearMask.mjs";

// export function boleto(codigo, validarBlocos = false) {
//   const cod = clearMask(codigo);
//   if (Number(cod[0]) === 8) return boletoArrecadacao(cod, validarBlocos);
//   return boletoBancario(cod, validarBlocos);
// }

export function boleto(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (Number(cod[0]) === 8)
    return boletoArrecadacaoLinhaDigitavel(cod, validarBlocos);
  return boletoBancarioLinhaDigitavel(cod, validarBlocos);
}
