import axios from "axios";
import { Product } from "../../entity/products";

export function getSingleProduct(productId: number): Promise<Product> {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${productId}`);
      console.log(response);
      console.log(response.data);


      resolve(productInfoToProductEntity(response.data));
    } catch (error) {
      console.log("API error in getSingleProduct:", error);
      reject(error);
    }
  });
}

function productInfoToProductEntity(productInfo: any): Product {
  let product = new Product();
  let id = productInfo.id;
  if (id) {
    product.id = id;
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
    product.price = price;
  }
  let thumbnail = productInfo.thumbnail;
  if (thumbnail) {
    product.thumbnail = thumbnail;
  }
  let discountPercentage = productInfo.discountPercentage;
  if (discountPercentage) {
    product.discountPercentage = discountPercentage;
  }
  let rating = productInfo.rating;
  if (rating) {
    product.rating = rating;
  }
  let stock = productInfo.stock;
  if (stock) {
    product.stock = stock;
  }
  let returnPolicy=productInfo.returnPolicy;
  if(returnPolicy){
    product.returnPolicy=returnPolicy;
  }
  let warrentyinformation=productInfo.warrantyInformation;
  if(warrentyinformation){
    product.warrantyInformation=warrentyinformation
  }
  return product;
}
