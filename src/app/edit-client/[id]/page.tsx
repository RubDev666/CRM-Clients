import { getClient } from "@/lib/actions/client.actions";
import EditClient from "@/pageComponents/EditClient";

export default async function Page({ params }: { params: { id: string } }) {
    const res = await getClient(params.id);

    if (!res) return (
        <div className='w-full mt-40'>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Cliente no encontrado</h1>
            <p className="mt-3 text-center font-bold xl:text-xl">Vuelve al inicio para ver o agregar clientes</p>
        </div>
    )

    return <EditClient client={res.client} />
}