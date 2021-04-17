export const formatCurrency = (currency, amount) => {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency }).format(
    amount
  );
};
