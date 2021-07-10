export function amountFormat(amount: string | number) {
  return Number(amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
