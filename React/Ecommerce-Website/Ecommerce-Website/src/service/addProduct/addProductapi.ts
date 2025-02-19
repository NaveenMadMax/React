import axios from "axios";

export function addProductAPI(product:any):Promise<any>{
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
      return new Promise(async (resolve, reject) => {
        try {
          const response = await axios.post("https://dummyjson.com/products/add", product);
          console.log(response.data);
          resolve(response.data); // Resolve with the raw product data from the API
        } catch (error) {
          console.log("API error in addProductAPI:", error);
          reject(error);
        }
      });
}