export interface ClientForm {
    nombre: string;
    email: string;
    telefono: number;
    notas: string;
}

export interface ClientDB extends ClientForm {
    _id: string;
}

export type ClientsDB = ClientDB[] | [];

export type GetClientsDB = {
    clients: ClientsDB;
}
