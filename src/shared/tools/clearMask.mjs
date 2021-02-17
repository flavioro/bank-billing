export default function clearMask(codigo) {
  return codigo.replace(/( |\.|-)/g, "");
}
