'use client';

import { useCRMstore } from "@/store/crm-store";
import { Form, Warning } from "@/components";
import { useRouter } from "next/navigation";
import { ClientDB } from "@/types/types";

export default function EditClient({ client }: { client: ClientDB }) {
    const router = useRouter();

    const { warning } = useCRMstore();

    return (
        <>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-third">Edit Client</h1>
            <p className="mt-3 text-center font-bold xl:text-xl text-white">Fill out all the fields to register a edit client</p>

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
                <Form client={client}/>
            </div>
        </>
    )
}