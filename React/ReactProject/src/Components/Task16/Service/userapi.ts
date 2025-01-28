
import { User } from "../Entity/user";
import axios from "axios";

export function fetchData():Promise<User>{
 return new Promise(async(resolve, reject)=>{
    try{
        let response = await axios.get ("https://randomuser.me/api/");
        let fetchedUser = response.data.results?.[0];
        resolve(fetchedUser);
    }catch (error){
        console.log("API ERROR in FetchData:",error)
        reject(error)
    } 
 })
}
