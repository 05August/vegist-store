export const convertPriceToVnd = (price) => {
  return price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};
