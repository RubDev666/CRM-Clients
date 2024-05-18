'use client';

import { useCRMstore } from "@/store/crm-store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ClientSearch() {
    const {filterSearch, resetFilter} = useCRMstore();

    return (
        <form
            className="bg-blue-900 w-full flex items-center justify-center px-2 py-3 md:py-5 xl:py-6  mt-4 sticky top-16 md:top-0 z-50"
            onSubmit={(e) => {
                e.preventDefault();

                const filterInput = document.querySelector('#filtro') as HTMLInputElement;

                if(filterInput.value === '') {
                    resetFilter();
                } else {
                    filterInput.value = '';
                }
            }}
        >
            <label htmlFor="filtro" className="flex mr-2 xl:mr-4">
                <div className="xl:hidden cursor-pointer">
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: 20, color: "#fff" }}
                    />
                </div>

                <div className="hidden xl:block cursor-pointer">
                    <FontAwesomeIcon
                        icon={faSearch}
                        style={{ fontSize: 25, color: "#fff" }}
                    />
                </div>
            </label>

            <input
                type="text"
                id="filtro"
                className="w-3/4 xl:w-1/2 py-1 px-3 xl:py-2 xl:text-lg xl:px-4"
                placeholder="Buscar por nombre de cliente"
                onChange={(e) => filterSearch(e.target.value)}
            />
        </form>
    )
}
