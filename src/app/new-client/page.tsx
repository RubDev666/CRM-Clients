'use client';

import { useCRMstore } from "@/store/crm-store";

import { Warning, Form } from "@/components";
import { useRouter } from "next/navigation";

export default function Page() {
    const { warning } = useCRMstore();

    const router = useRouter();

    return (
        <>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3 text-center font-bold xl:text-xl">Llena todos los campos para registrar un nuevo cliente</p>

            {warning && <Warning />}

            <div className="flex justify-center mt-5">
                <button
                    className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 font-bold"
                    onClick={() => router.push('/')}
                >
                    Ver todos los clientes
                </button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-7'>
                <Form client={undefined} />
            </div>
        </>
    )
}