import axios from "axios";
import { Product } from "../../entity/products";

export function fetchProducts(): Promise<Product[]> {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response)
      console.log (response.data)
      console.log(response.data.products)
      // resolve(response.data.products)
      resolve(productsInfosToProductsEntities(response.data.products))
    } catch (error) {
      console.log("API error in FetchProducts:", error);
      reject(error);
    }
  });
}

function productsInfosToProductsEntities(productsInfos: any): Product[] {
  let products: Product[] = productsInfos.map((productInfo: Product) =>
    productInfoToProductEntity(productInfo)
  );
  return products;
}
function productInfoToProductEntity(productInfo: any): Product {
  let product = new Product();
  let id = productInfo.id;
  if (id) {
   product.id = id ;
  }
  let title = productInfo.title;
  if (title) {
    product.title = title;
  }
  let description = productInfo.description;
  if (description) {
    product.description = description;
  }
  let price = productInfo.price;
  if (price) {
    product.price =price;
  }
  let thumbnail = productInfo.thumbnail;
  if (thumbnail) {
    product.thumbnail = thumbnail;
  }
  let discountPercentage=productInfo.discountPercentage
  if(discountPercentage){
    product.discountPercentage=discountPercentage
  }
  let rating= productInfo.rating
  if(rating){
    product.rating=rating
  }
  let stocks= productInfo.stocks
  if (stocks){
    product.stocks=stocks
  }
  return product;
}
