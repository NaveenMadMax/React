import axios from "axios"
import { Product } from "../../entity/products"

export function updateProduct(productId: number, updatedData: Partial<Product>):Promise<Product>{
    return new Promise (async(resolve, reject)=>{
        try{
            let response=await axios.put(`https://dummyjson.com/products/${productId}`,updatedData);
            console.log(response.data);
            resolve(response.data);
        }catch(error){
            console.log("API error in FetchProducts:", error);
            reject(error);
        }
    })
}