export default function clearMask(codigo) {
  return String(codigo).replace(/( |\.|-)/g, "");
}
