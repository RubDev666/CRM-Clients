import { create } from "zustand";
import { ClientDB } from "@/types/types";

type CRMstate = {
    clients: ClientDB[] | [];
    clientModal: any;
    modal: boolean;
    filter: any[];
    filterActive: boolean;
    warning: boolean;
    updateClients: (ko: any) => void;
    closeModal: () => void;
    closeWarning: () => void;
}

export const useCRMstore = create<CRMstate>((set, get) => ({
    clients: [],
    clientModal: {},
    modal: false,
    filter: [],
    filterActive: false,
    warning: true,
    updateClients: (ko) => {
        set({clients: ko});
    },
    closeModal: () => set({modal: false}),
    closeWarning: () => set({warning: false})
}))
