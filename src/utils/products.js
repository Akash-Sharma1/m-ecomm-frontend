export const transformProductsResponse = (products) => {
  const productsDict = {};

  products.forEach((product) => productsDict[product.id] = product);
  return productsDict;
};
