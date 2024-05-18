'use client';

import { ClientDB, ClientForm } from "@/types/types";
import { createClient, updateClient } from "@/lib/actions/client.actions";
import { useRouter } from "next/navigation";
import { useCRMstore } from "@/store/crm-store";
import { useEffect } from "react";

export default function Form({client}: {client: ClientDB | undefined}) {
    const router = useRouter();

    const {resetFilter} = useCRMstore();

    useEffect(() => {
        resetFilter();
    }, [])

    const submit = async (formData: FormData) => {
        const objSubmit: ClientForm = {
            nombre: formData.get('nombre') as string,
            email: formData.get('email') as string,
            telefono: parseInt(formData.get('telefono') as string),
            notas: formData.get('notas')?.toString() as string
        }

        if(Object.values(objSubmit).includes('')) return;

        if(!client) await createClient(objSubmit);
        if(client !== undefined) await updateClient(client._id, objSubmit);

        router.push('/');
    }

    const validateTel = () => {
        const tel = document.querySelector('#telefono') as HTMLInputElement;

        if(tel.value.length < 9) {
            tel.setCustomValidity('Minimo 9 digitos');

            tel.reportValidity();
        } else {
            tel.setCustomValidity('');
        }
    }

    return(
        <form
            //onSubmit={}
            action={submit}
            name='formulario'
        >
            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={client?.nombre}
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={client?.email}
                    required
                    autoComplete='auto'
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input
                    id="telefono"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={client?.telefono}
                    required
                    onInput={validateTel}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="notas"
                >Notas <span className='text-sm font-semibold'>(Max. 200 Carácteres)</span>:</label>
                <textarea
                    id="notas"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={client?.notas}
                    required
                    maxLength={200}
                />
            </div>

            <button
                type="submit"
                className='mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg rounded-lg hover:bg-blue-600'
            >
                {client ? 'Editar Cliente' : 'Registrar Cliente'}
            </button>
        </form>
    )
}