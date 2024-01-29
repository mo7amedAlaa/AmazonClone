import axios from 'axios';
export async function productData() {
  let products = (await axios.get('https://dummyjson.com/products')).data
    .products;
  console.log(products);
  return products;
}
export async function productSearch(quary) {
  let products = (
    await axios.get(`https://dummyjson.com/products/search?q=${quary}`)
  ).data.products;
  console.log(products);
  return products;
}
export async function productDetails(id) {
  let product = (await axios.get(`https://dummyjson.com/products/${id}`)).data;
  console.log(product);
  return product;
}
// export async function productCategories(categorie) {
//   let products = (
//     await axios.get(`https://dummyjson.com/products/category/${categorie}`)
//   ).data.products;
//   console.log(products);
//   return products;
// }
// productCategories('smartphones');
