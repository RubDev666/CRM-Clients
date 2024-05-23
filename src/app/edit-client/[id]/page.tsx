import { getClient } from "@/lib/actions/client.actions";

import EditClient from "@/pageComponents/EditClient";
import { Error } from "@/components";

export default async function Page({ params }: { params: { id: string } }) {
    const res = await getClient(params.id);

    if(!res) return <Error title="Client not found" message="Click to view or add clients" />;

    return <EditClient client={res.client} />
}
