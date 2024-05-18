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

            <div className="bg-white relative z-40 mt-16 p-4 rounded-lg flex flex-col justify-center items-start">
                <i
                    className="fas fa-times font-bold text-red-700 hover:text-red-500 cursor-pointer inline relative mb-2 text-3xl self-end"
                    onClick={() => closeModal()}
                >
                </i>

                <FontAwesomeIcon
                    icon={faTimes}
                    style={{ fontSize: 28 }}
                    className="fas fa-times font-bold text-red-700 hover:text-red-500 cursor-pointer inline relative mb-2 text-3xl self-end"
                    onClick={() => closeModal()}
                />

                <p className="font-bold mb-2">Cliente: <span className="font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.nombre}</span> </p>
                <p className="font-bold mb-2">Teléfono: <span className="font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.telefono}</span> </p>
                <p className="font-bold mb-2">Email: <span className="font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.email}</span> </p>
                <p className="font-bold mb-2">Notas: <span className="font-normal sm:text-lg lg:text-xl ml-2">{clienteModal.notas}</span> </p>

                <div className="flex w-full mt-6 justify-center gap-10">
                    <button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-500 font-bold text-lg py-2 px-4 rounded-lg text-white min-[480px]:w-1/4"
                        onClick={() => {
                            router.push(`edit-client/${clienteModal._id}`);
                            
                            closeModal();
                        }}
                    >
                        Editar
                    </button>

                    <button
                        type="submit"
                        className="bg-red-700 text-white hover:bg-red-500 font-bold text-lg py-2 px-4 rounded-lg min-[480px]:w-1/4"
                        onClick={async () => {
                            await deleteClient(clienteModal._id);

                            closeModal();
                            resetFilter();
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}