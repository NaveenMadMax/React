import axios from "axios";

export function deleteProduct(productId: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.delete(`https://dummyjson.com/products/${productId}`);
        // console.log(response.data);
        resolve(response.data); 
      } catch (error) {
        console.log("API error in deleteProduct:", error);
        reject(error);
      }
    });
  }

