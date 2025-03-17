import axios from "axios";
import { Product } from "../../entity/products";

export function addProductAPI(product: any): Promise<Product> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", product);
      console.log(response.data);
      resolve(productInfoToProductEntity(response.data)); // Map response to Product entity
    } catch (error) {
      console.log("API error in addProductAPI:", error);
      reject(error);
    }
  });
}

function productInfoToProductEntity(productInfo: any): Product {
  let product = new Product();
  
  if (productInfo.id) {
    product.id = productInfo.id;
  }
  if (productInfo.title) {
    product.title = productInfo.title;
  }
  if (productInfo.description) {
    product.description = productInfo.description;
  }
  if (productInfo.price) {
    product.price = productInfo.price;
  }
  if (productInfo.thumbnail) {
    product.thumbnail = productInfo.thumbnail;
  }
  if (productInfo.discountPercentage) {
    product.discountPercentage = productInfo.discountPercentage;
  }
  if (productInfo.rating) {
    product.rating = productInfo.rating;
  }
  if (productInfo.stock) {
    product.stock = productInfo.stock;
  }

  return product;
}
