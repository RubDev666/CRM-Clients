import { create } from "zustand";
import { ClientDB, ClientsDB } from "@/types/types";

type CRMstate = {
    clients: ClientsDB;
    clientModal: ClientDB | null;
    filters: ClientsDB;
    filterActive: boolean;
    warning: boolean;
    closeModal: () => void;
    closeWarning: () => void;
    getClientModal: (client: ClientDB) => void;
    getClientsDB: (clientes: ClientDB[] | []) => void;
    filterSearch: (text: string) => void;
    resetFilter: () => void;
}

export const useCRMstore = create<CRMstate>((set, get) => ({
    clients: [],
    clientModal: null,
    filters: [],
    filterActive: false,
    warning: true,
    closeModal: () => set({clientModal: null}),
    closeWarning: () => set({warning: false}),
    getClientModal: (client) => set({clientModal: client}),
    getClientsDB: (clientsDB) => set({clients: clientsDB}),
    filterSearch: (text) => {
        if(text === '') {
            set({filterActive: false});
            set({filters: []});
            return;
        }

        const cli = get().clients;

        const busqueda = cli.filter(cliente => cliente.name.toLowerCase().includes(text.toLowerCase()));

        set({filters: busqueda});
        set({filterActive: true});
    },
    resetFilter: () => set({filterActive: false, filters: []})
}))
