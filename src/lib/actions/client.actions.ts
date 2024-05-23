"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";

import ClientModel from "../models/client.model";
import { ClientForm, ClientDB } from "@/types/types";

export async function getClients() {
    try {
        connectToDB();

        const res = await ClientModel.find({});
    
        let newArr: ClientDB[] | [] = [];

        if(res.length > 0) {
            for(let client of res) {
                const {email, name, notes, phone, _id} = client;

                //I get warnings if I don't convert the id to a string
                newArr = [{email, name, notes, phone, _id: _id.toString()}, ...newArr]
            }
        }

        return { clients: newArr, isNext: true };
    } catch (error: any) {
        console.log(error);
    }
}

export async function getClient(_id: string) {
    try {
        connectToDB();

        const client = await ClientModel.findById(_id);

        const obj: ClientDB = {
            _id: client._id.toString(),
            name: client.name,
            notes: client.notes,
            email: client.email,
            phone: client.phone
        }

        return {client: obj};
    } catch (error) {
        console.log(error);
    }
}

export async function createClient(client: ClientForm) {
    try {
        connectToDB();

        await new ClientModel(client).save();

        revalidatePath('/');
    } catch (error: any) {
        console.log(error);
    }
}

export async function updateClient(id: string, updateClient: ClientForm) {
    try {
        connectToDB();

        await ClientModel.findByIdAndUpdate(id, updateClient);

        revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
}

export async function deleteClient(id: string) {
    try {
        connectToDB();

        await ClientModel.findByIdAndDelete(id);

        revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
}

