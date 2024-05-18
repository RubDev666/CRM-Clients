"use server";

import { connectToDB } from "../mongoose";

import ClientModel from "../models/client.model";
import { ClientForm, ClientDB } from "@/types/types";

//obtener cantidad de post segun el numero de la paginacion
export async function getClients() {
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

export const postClient = async (client: ClientForm) => {
    try {
        await connectToDB();

        await new ClientModel(client).save();
    } catch (error: any) {
        console.log(error);
    }
}
