import { getClients } from "@/lib/actions/client.actions";

import IndexPage from "@/pageComponents/IndexPage";

export default async function Home() {
    const result = await getClients();

    if (!result) return <h1>Ha ocurrido un error inesperado</h1>;

    return ( 
        <IndexPage clients={result.posts} />
    )
}
