import React, {useState} from 'react'
import {Modal} from "@mantine/core";

function InquiryItem({item}){

    const [opened, setOpened] = useState(false);

    const handleClick_deny = () => {

    }

    const handleClick_accept = () => {

    }



    return(
        <div>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Antrag bearbeiten"
            >
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p  className="text-sm font-medium text-gray-900 truncate ">
                                        Ticketart
                                    </p>
                                    <p  className="text-sm text-gray-500 truncate ">
                                        {item.ticket.ticket_art}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Institution
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        {item.institution}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Verantwortlicher
                                    </p>
                                    <p  className="text-sm text-gray-500 truncate ">
                                        {item.verantwortlicher}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Anzahl der Passagiere
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        {item.anzahlPassagiere}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Geltungstag
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        {item.ticket.geltungstag}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Preis
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        {item.preis}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-6 place-content-around">
                    <button className="btn btn-sm btn-outline rounded-sm" onClick={handleClick_deny}>Ablehnen </button>
                    <button className="btn btn-sm btn-outline btn-success rounded-sm" onClick={handleClick_accept}>Annehmen</button>
                </div>
            </Modal>

            <div className="p-2 bg-white border shadow-md sm:p-8 " onClick={() => setOpened(true)}>
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Anfrage {item.anfrage_id}</h5>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 ">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p  className="text-sm font-medium text-gray-900 truncate ">
                                    Ticketart
                                </p>
                                <p  className="text-sm text-gray-500 truncate ">
                                    {item.ticket.ticket_art}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    Institution
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    {item.institution}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default InquiryItem