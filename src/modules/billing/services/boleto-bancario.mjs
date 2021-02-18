import { modulo10, modulo11Bancario } from "./modulo.mjs";
import { convertToBoletoBancarioCodigoBarras } from "./conversor.mjs";
import clearMask from "../../../shared/tools/clearMask.mjs";
import moment from "moment";

export function boletoBancarioCodigoBarras(codigo) {
  const cod = clearMask(codigo);
  if (!/^[0-9]{44}$/.test(cod)) return false;
  const DV = cod[4];
  const bloco = cod.substring(0, 4) + cod.substring(5);
  return modulo11Bancario(bloco) === Number(DV);
}

export function boletoBancarioLinhaDigitavel(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (!/^[0-9]{47}$/.test(cod)) return false;
  const blocos = [
    {
      num: cod.substring(0, 9),
      DV: cod.substring(9, 10),
    },
    {
      num: cod.substring(10, 20),
      DV: cod.substring(20, 21),
    },
    {
      num: cod.substring(21, 31),
      DV: cod.substring(31, 32),
    },
  ];
  const validBlocos = validarBlocos
    ? blocos.every((e) => modulo10(e.num) === Number(e.DV))
    : true;
  const barCode = convertToBoletoBancarioCodigoBarras(cod);
  const validDV = boletoBancarioCodigoBarras(barCode);
  // return validBlocos && validDV, barCode;
  let strValue = cod.substring(37, 47); // Valor nominal
  strValue += "+";
  const value = strValue
    .replace(strValue.slice(-3), `.${strValue.slice(-3)}`)
    .replace("+", "");
  const amount = parseFloat(value).toFixed(2);

  const days = cod.substring(33, 37); // Fator Vencimento

  const dateStart = new Date("October 07, 1997"); // 07/10/1997

  const dateLast = moment(dateStart).add(days, "days").format("YYYY-MM-DD");

  const returnBilling = {
    barCode: barCode,
    amount,
    expirationDate: dateLast,
  };
  return returnBilling;
}

export function boletoBancario(codigo, validarBlocos = false) {
  const cod = clearMask(codigo);
  if (cod.length === 44) return boletoBancarioCodigoBarras(cod);
  if (cod.length === 47)
    return boletoBancarioLinhaDigitavel(codigo, validarBlocos);
  return false;
}
