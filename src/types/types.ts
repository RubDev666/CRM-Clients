export interface ClientForm {
    name: string;
    email: string;
    phone: number;
    notes: string;
}

export interface ClientDB extends ClientForm {
    _id: string;
}

export type ClientsDB = ClientDB[] | [];

export type GetClientsDB = {
    clients: ClientsDB;
}
