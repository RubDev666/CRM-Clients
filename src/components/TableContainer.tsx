'use client';

export default function TableContainer({ children }: { children: React.ReactNode }) {
    return (
        <table className={`w-full shadow mt-5 table-auto`}>
            <thead className='text-third sticky shadow-md'>
                <tr>
                    <th className='p-2'>Client</th>
                    <th className='p-2 hidden xl:table-cell'>Contact</th>
                    <th className='p-2 hidden sm:table-cell'>Notes</th>
                    <th className='p-2'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {children}
            </tbody>
        </table>
    )
}
