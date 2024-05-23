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
            <h3 className="uppercase font-bold">Warning:</h3>
            <p>This web application is for practical and demonstration purposes only, so anyone who enters the site will be able to read, edit and delete the data that you or any user adds. <span className="text-red-600 font-bold">It is recommended NOT to add real phone numbers and emails for your security.</span></p>
        </div>
    )
}