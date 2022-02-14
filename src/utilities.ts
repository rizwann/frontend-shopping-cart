export default function formatCurrency(num: number) {
  return "€" + Number(num.toFixed(2)).toLocaleString() + " ";
}
