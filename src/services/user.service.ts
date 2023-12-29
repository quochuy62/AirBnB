import { getLocal } from "src/utils";
import { axiosAuth, axiosWithoutAuth } from "./axios.config";
import { ACCESS_TOKEN } from "src/constants";

type TBody ={
    email: string;
    password: string;
    name: string;
    phone:string;
};

export const signUp = async (data: TBody) =>{
    try{
        const resp = await axiosWithoutAuth("/auth/signup",{
            method: "POST",
            data,
        });
        return resp.data.content;
    } catch (error: any){
        throw new Error(error);
    }
};