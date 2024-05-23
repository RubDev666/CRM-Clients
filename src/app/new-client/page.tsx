'use client';

import { useCRMstore } from "@/store/crm-store";

import { Warning, Form } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { warning, closeModal} = useCRMstore();

    const router = useRouter();

    useEffect(() => {
        closeModal();
    }, [])

    return (
        <>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-third">New Client</h1>
            <p className="mt-3 text-center font-bold xl:text-xl text-white">Fill out all the fields to register a new client</p>

            {warning && <Warning />}

            <div className="flex justify-center mt-5">
                <button
                    className="hover:bg-third border border-third text-third hover:text-primary px-4 py-2 font-bold"
                    onClick={() => router.push('/')}
                >
                    See all clients
                </button>
            </div>

            <div className='shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-7'>
                <Form client={undefined} />
            </div>
        </>
    )
}