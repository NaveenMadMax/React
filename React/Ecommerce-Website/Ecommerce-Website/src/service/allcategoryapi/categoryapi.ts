import axios from "axios";
import { CategoryType } from "../../entity/allProductCategory";

export function fetchcatergory(): Promise<CategoryType[]>{
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get("https://dummyjson.com/products/categories");
            console.log(response.data);
            resolve(response.data);
        } catch (error) {
            console.log("API error in FetchProducts:", error);
            reject(error);
        }
    });
}