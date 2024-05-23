import { Error } from "@/components";
import { getClients } from "@/lib/actions/client.actions";

import IndexPage from "@/pageComponents/IndexPage";

export default async function Home() {
    const result = await getClients();

    if(!result) return <Error title="An unexpected error has occurred" message=" Please reload the site or try again later." />

    return <IndexPage clients={result.clients} />
}
