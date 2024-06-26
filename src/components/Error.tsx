export default function Error({title, message}: {title: string, message: string}) {
    return (
        <div className='w-full mt-40'>
            <h1 className="text-center font-black text-3xl xl:text-4xl text-third">{title}</h1>
            <p className="mt-3 text-center font-bold xl:text-xl text-white">{message}</p>
        </div>
    )
}
