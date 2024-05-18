'use client';

import { useEffect } from "react";

import { useCRMstore } from "@/store/crm-store";
import { ClientDB, GetClientsDB } from "@/types/types";
import { ClientSearch, Warning, Client, Modal } from "@/components";

export default function IndexPage({ clients: results }: GetClientsDB) {
    const { warning, filterActive, clientModal, filters, getClientsDB } = useCRMstore();

    useEffect(() => {
        getClientsDB(results);
    }, [])

    return (
        <>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3 text-center font-bold xl:text-xl">Administra tus Clientes</p>

            {results.length > 0 && <ClientSearch />}

            {warning && <Warning />}

            {clientModal && <Modal clienteModal={clientModal} />}

            {results.length ? (
                <table className={`w-full bg-white shadow mt-5 table-auto ${filterActive && 'hidden'}`}>
                    <thead className='bg-blue-900 text-white sticky top-28 md:top-16 xl:top-20 shadow-md'>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2 hidden xl:table-cell'>Contacto</th>
                            <th className='p-2 hidden sm:table-cell'>Notas</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {results.map((client: ClientDB) => (
                            <Client
                                client={client}
                                key={client._id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={`text-center mt-10 ${filterActive && 'hidden'} font-bold text-2xl`}>No Hay Clientes aún...</p>
            )}

            {filters.length ? (
                <table className={`w-full bg-white shadow mt-5 table-auto ${!filterActive && 'hidden'}`}>
                    <thead className='bg-blue-900 text-white sticky top-28 md:top-16 shadow-md'>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2 hidden xl:table-cell'>Contacto</th>
                            <th className='p-2 hidden sm:table-cell'>Notas</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filters.map(cliente => (
                            <Client
                                client={cliente}
                                key={cliente._id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={`text-center mt-10 ${!filterActive && 'hidden'} font-bold text-2xl`}>No hay resultados relacionados</p>
            )}
        </>
    )
}