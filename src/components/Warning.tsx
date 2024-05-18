'use client';

import { useCRMstore } from "@/store/crm-store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

export default function Warning() {
    const {closeWarning} = useCRMstore();

    return (
        <div className="text-center w-full bg-yellow-200 py-4 px-10 mt-4 text-sm md:text-base relative z-0">
            <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ fontSize: 28 }}
                className="text-red-600"
            />
            <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 28 }}
                className="text-red-700 hover:text-red-500 cursor-pointer absolute right-5"
                onClick={closeWarning}
            />
            <h3 className="uppercase font-bold">Aviso importante:</h3>
            <p>Esta aplicacion web es solo para fines practicos y demostrativos, por lo que cualquier persona que ingrese al sitio podra leer, editar y borrar los datos que usted o cualquier usuario agregue. <span className="text-red-600 font-bold">Se recomienda NO añadir numeros de teléfono y correos reales por su seguridad.</span></p>
        </div>
    )
}