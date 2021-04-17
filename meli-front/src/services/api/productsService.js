import http from "../http";

/**
 * read the product list from the service.
 */
export const readProducts = async (search) => {
  const { data } = await http.get(`api/items?q=${search}`);
  return data;
};

/**
 * read the product from the service.
 */
export const readProduct = async (id) => {
  const { data } = await http.get(`api/items/${id}`);
  return data;
};