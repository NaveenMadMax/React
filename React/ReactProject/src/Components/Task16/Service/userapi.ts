
import { User } from "../Entity/user";
import axios from "axios";
const baseURL = "https://randomuser.me/api/";

export function fetchData():Promise<User>{
 return new Promise(async(resolve, reject)=>{
    try{
        let response = await axios.get (baseURL);
        let fetchedUser = response.data.results?.[0];
        resolve(fetchedUser);
    }catch (error){
        console.log("API ERROR in FetchData:",error)
        reject(error)
    } 
 })
}
