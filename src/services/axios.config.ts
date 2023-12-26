import axios from "axios";
import { ACCESS_TOKEN, TOKEN_CYBER } from "src/constants";
import { getLocal } from "src/utils";

const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/api";
export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000, 
  });
  
  
  export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000, 
  });
  
