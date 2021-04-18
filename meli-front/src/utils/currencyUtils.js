export const formatCurrency = (currency, amount) => {
  const price =  new Intl.NumberFormat(
    "es-AR"
    // { style: "currency", currency }
  ).format(amount);

  return `$ ${price}`

};
