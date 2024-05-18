"use server";

import { connectToDB } from "../mongoose";

import ClientModel from "../models/client.model";

//obtener cantidad de post segun el numero de la paginacion
export async function fetchPosts() {
    try {
        connectToDB();

        const res = await ClientModel.find({});
    
        let newArr: any[] | [] = [];

        if(res.length > 0) {
            for(let client of res) {
                const {email, nombre, notas, telefono, _id} = client;

                //I get warnings if I don't convert the id to a string
                newArr = [{email, nombre, notas, telefono, _id: _id.toString()}, ...newArr]
            }
        }

        return { posts: newArr, isNext: true };
    } catch (error: any) {
        console.log(error);
    }
}
