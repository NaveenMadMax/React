import  axios  from "axios";
import { Product } from "../../entity/products";


export function fetchProductByCategory(category: string): Promise<Product[]> {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      console.log(response.data);
      resolve(response.data.products);
    } catch (error) {
      console.log("API error in FetchProducts:", error);
      reject(error);
    }
  });
}