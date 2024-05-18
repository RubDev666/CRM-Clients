import { fetchPosts } from "@/lib/actions/client.actions";

import IndexPage from "@/pageComponents/IndexPage";

export default async function Home() {
    const result = await fetchPosts();

    if(!result) return <h1>Ha ocurrido un error inesperado</h1>;

    return (
        <>
            <h1>{result.posts[2].nombre}</h1>

            <IndexPage datos={result.posts} />
        </>
    )
}
