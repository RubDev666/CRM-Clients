'use client';

import { useEffect } from "react";

import { useCRMstore } from "@/store/crm-store";
import { ClientDB, GetClientsDB } from "@/types/types";
import { ClientSearch, Warning, Client, Modal, TableContainer } from "@/components";

export default function IndexPage({ clients: results }: GetClientsDB) {
    const { warning, filterActive, clientModal, filters, getClientsDB, closeModal } = useCRMstore();

    useEffect(() => {
        getClientsDB(results);

        addEventListener('resize', () => {if(innerWidth >= 1280) closeModal()})
    }, [])

    return (
        <>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-third">Clients</h1>
            <p className="mt-3 text-center font-bold xl:text-xl text-white">Manage your clients</p>

            {results.length > 0 && <ClientSearch />}

            {warning && <Warning />}

            {clientModal && <Modal clienteModal={clientModal} />}

            {results.length && !filterActive ? (
                <TableContainer>
                    {results.map((client: ClientDB) => <Client client={client} key={client._id} />)}
                </TableContainer>
            ) : (
                <p className={`text-center mt-10 ${filterActive && 'hidden'} font-bold text-3xl xl:text-4xl text-third`}>No clients yet...</p>
            )}

            {filters.length && filterActive ? (
                <TableContainer>
                    {filters.map((client: ClientDB) => <Client client={client} key={client._id} />)}
                </TableContainer>
            ) : (
                <p className={`text-center mt-10 ${!filterActive && 'hidden'} font-bold text-3xl xl:text-4xl text-third`}>No related results</p>
            )}
        </>
    )
}