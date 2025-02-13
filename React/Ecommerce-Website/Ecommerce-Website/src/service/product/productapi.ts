import axios from "axios";
import { Product } from "../../entity/products";

export function fetchProducts(): Promise<Product[]> {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      let fetchProducts=response.data.products
      resolve(fetchProducts);
    } catch (error) {
      console.log("API error in FetchProducts:", error);
      reject(error);
    }
  });
}

// function productsInfosToProductsEntities(productsInfos: any): Product[] {
//   let products: Product[] = productsInfos.map((productInfo: Product) =>
//     productInfoToProductEntity(productInfo)
//   );
//   return products;
// }
// function productInfoToProductEntity(productInfo: any): Product {
//   let product = Product();
//   let id = productInfo.id;
//   if (id) {
//     id = productInfo.id;
//   }
//   let title = productInfo.title;
//   if (title) {
//     product.title = title;
//   }
//   let description = productInfo.description;
//   if (description) {
//     description = productInfo.description;
//   }
//   let price = productInfo.price;
//   if (price) {
//     price = productInfo.price;
//   }
//   let thumbnail = productInfo.thumbnail;
//   if (thumbnail) {
//     thumbnail = productInfo.thumbnail;
//   }
//   let discountPercentage=productInfo.discountPercentage
//   if(discountPercentage){
//     discountPercentage=productInfo.discountPercentage
//   }
//   let rating= productInfo.rating
//   if(rating){
//     rating=productInfo.rating
//   }
//   let stocks= productInfo.stocks
//   if (stocks){
//     stocks=productInfo.stocks
//   }
//   return product;
// }
