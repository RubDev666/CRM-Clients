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
            name: formData.get('client-name') as string,
            email: formData.get('email') as string,
            phone: parseInt(formData.get('phone') as string),
            notes: formData.get('notes')?.toString() as string
        }

        if(Object.values(objSubmit).includes('')) return;

        if(!client) await createClient(objSubmit);
        if(client !== undefined) await updateClient(client._id, objSubmit);

        router.push('/');
    }

    const validateTel = () => {
        const tel = document.querySelector('#phone') as HTMLInputElement;

        if(tel.value.length < 9) {
            tel.setCustomValidity('Minimum 9 digits');

            tel.reportValidity();
        } else {
            tel.setCustomValidity('');
        }
    }

    return(
        <form
            //onSubmit={}
            action={submit}
            name='client-form'
        >
            <div className="mb-4">
                <label
                    className="text-third font-bold"
                    htmlFor="client-name"
                >Name:</label>
                <input
                    id="client-name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client name"
                    name="client-name"
                    defaultValue={client?.name}
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-third font-bold"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client email"
                    name="email"
                    defaultValue={client?.email}
                    required
                    autoComplete='auto'
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-third font-bold"
                    htmlFor="phone"
                >Phone:</label>
                <input
                    id="phone"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client phone"
                    name="phone"
                    defaultValue={client?.phone}
                    required
                    onInput={validateTel}
                    autoComplete="false"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-third font-bold"
                    htmlFor="notes"
                >Notes <span className='text-sm font-semibold'>(Max. 200 Characters)</span>:</label>
                <textarea
                    id="notes"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Client notes"
                    name="notes"
                    defaultValue={client?.notes}
                    required
                    maxLength={200}
                />
            </div>

            <button
                type="submit"
                className='mt-5 w-full p-3 font-bold hover:bg-third border border-third text-third hover:text-primary text-lg rounded-lg '
            >
                {client ? 'Edit Client' : 'Register Client'}
            </button>
        </form>
    )
}