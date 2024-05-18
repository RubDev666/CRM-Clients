'use client'

import { ClientDB } from "@/types/types";
import { useRouter } from "next/navigation";
import { deleteClient, getClient } from "@/lib/actions/client.actions";
import { useCRMstore } from "@/store/crm-store";

export default function Client({ client }: { client: ClientDB }) {
    const { nombre, email, telefono, _id, notas } = client;

    const {getClientModal, resetFilter} = useCRMstore();

    const router = useRouter();

    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-base font-bold lg:text-2xl text-gray-800">{nombre}</p>
            </td>

            <td className="p-6 hidden xl:table-cell">
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono} </p>
            </td>

            <td className='hidden sm:table-cell w-1/3'>
                {notas}
            </td>

            <td className="py-6 px-4 flex items-center justify-center xl:table-cell">
                <button
                    type="button"
                    className="bg-blue-700 p-2 text-white hover:bg-blue-500 font-bold text-xs flex  xl:hidden rounded-lg"
                    onClick={async () => {
                        const res = await getClient(_id);

                        if(!res) return;

                        getClientModal(res.client);
                    }}
                >
                    Ver informacion completa
                </button>

                <button
                    type="button"
                    className="bg-blue-700 hover:bg-blue-500 font-bold text-xs hidden xl:block py-2 rounded-lg text-white w-full mb-3"
                    onClick={() => router.push(`edit-client/${_id}`)}
                >
                    Editar
                </button>

                <button
                    type="submit"
                    className="bg-red-700 text-white hover:bg-red-500 font-bold text-xs p-2 rounded-lg w-full hidden xl:block"
                    onClick={() => {
                        deleteClient(_id);

                        resetFilter();
                    }}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}