'use client'

import { ClientDB } from "@/types/types";
import { useRouter } from "next/navigation";
import { deleteClient, getClient } from "@/lib/actions/client.actions";
import { useCRMstore } from "@/store/crm-store";

export default function Client({ client }: { client: ClientDB }) {
    const { name, email, phone, _id, notes } = client;

    const {getClientModal, resetFilter} = useCRMstore();

    const router = useRouter();

    return (
        <tr className="border-b border-gray-600 text-white hover:bg-fourth">
            <td className='py-4 px-2 space-y-2 border-r border-gray-600 overflow-hidden max-w-[100px] xl:max-w-[150px]'>
                <p className="text-base font-semibold text-center xxl:text-2xl text-ellipsis">{name}</p>
            </td>

            <td className="p-6 hidden xl:table-cell border-r border-gray-600 text-center">
                <p className=""> <span className="font-semibold">Email: </span>{email} </p>
                <p className=""> <span className="font-semibold">Phone: </span>{phone} </p>
            </td>

            <td className='hidden sm:table-cell w-1/3 border-r border-gray-600 overflow-hidden min-w-[300px] lg:min-w-[400px] text-center py-4 px-2'>
                {notes}
            </td>

            <td className="py-4 px-2 xl:table-cell w-[120px]">
                <button
                    type="button"
                    className="border border-third hover:bg-third hover:text-primary p-2 mx-auto text-third font-bold text-xs flex xl:hidden rounded-lg"
                    onClick={async () => {
                        const res = await getClient(_id);

                        if(!res) return;

                        getClientModal(res.client);
                    }}
                >
                    See client
                </button>

                <button
                    type="button"
                    className="border border-third hover:bg-third hover:text-primary text-third font-bold text-xs hidden xl:block py-2 rounded-lg w-full mb-3"
                    onClick={() => router.push(`edit-client/${_id}`)}
                >
                    Edit
                </button>

                <button
                    type="submit"
                    className="border border-danger hover:bg-danger hover:text-white text-danger  font-bold text-xs p-2 rounded-lg w-full hidden xl:block"
                    onClick={() => {
                        deleteClient(_id);

                        resetFilter();
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}