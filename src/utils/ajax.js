import { CONFIG } from "./config";
import axios from 'axios';

export function instagram(){
    const promise = axios.get(CONFIG.Instagram_URL);
    //const promise = fetch(CONFIG.PRODUCTS_URL);
    return promise;
}export function facebook(){
    const promise = axios.get(CONFIG.Facebook_URL);
    //const promise = fetch(CONFIG.PRODUCTS_URL);
    return promise;
}
export function linkedin(){
     const promise = axios.get(CONFIG.LinkedIn_URL);
     //const promise = fetch(CONFIG.PRODUCTS_URL);
     return promise;
 }