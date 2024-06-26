'use client';

import { useRouter } from 'next/navigation';

import { useCRMstore } from '@/store/crm-store';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { deleteClient } from '@/lib/actions/client.actions';
import { ClientDB } from '@/types/types';

export default function Modal({clienteModal}: {clienteModal: ClientDB}) {
    const router = useRouter();

    const {closeModal, resetFilter} = useCRMstore();

    return(
        <div className="z-50 z- fixed top-16 md:top-0 left-0 md:left-1/4 h-screen w-full md:w-3/4 px-6 xl:hidden">
            <div className="bg-black opacity-40 absolute h-screen w-screen top-0 left-0" onClick={() => closeModal()}></div>

            <div className="bg-fourth relative z-40 mt-16 p-4 rounded-lg flex flex-col justify-center items-start">
                <FontAwesomeIcon
                    icon={faTimes}
                    style={{ fontSize: 28 }}
                    className="fas fa-times font-bold text-secondary cursor-pointer inline relative mb-2 text-3xl self-end"
                    onClick={() => closeModal()}
                />

                <p className="font-bold mb-2 text-third">Client: <span className="text-white font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.name}</span> </p>
                <p className="font-bold mb-2 text-third">Phone: <span className="text-white font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.phone}</span> </p>
                <p className="font-bold mb-2 text-third">Email: <span className="text-white font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.email}</span> </p>
                <p className="font-bold mb-2 text-third">Notes: <span className="text-white font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.notes}</span> </p>

                <div className="flex w-full mt-6 justify-center gap-10">
                    <button
                        type="button"
                        className="border border-third hover:bg-third font-bold text-lg py-2 px-4 rounded-lg text-third hover:text-primary min-[480px]:w-1/4"
                        onClick={() => {
                            router.push(`edit-client/${clienteModal._id}`);
                            
                            closeModal();
                        }}
                    >
                        Edit
                    </button>

                    <button
                        type="submit"
                        className="text-danger hover:bg-danger hover:text-white border border-danger font-bold text-lg py-2 px-4 rounded-lg min-[480px]:w-1/4"
                        onClick={async () => {
                            await deleteClient(clienteModal._id);

                            closeModal();
                            resetFilter();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}