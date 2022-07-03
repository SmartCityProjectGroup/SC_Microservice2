import {Select} from "@mantine/core";
import {ShoppingCart} from "tabler-icons-react";

function DrawerItem({ticket}) {
    return ticket.tripInfo === undefined ? null
        : (
        <>
            <div className="card rounded-md min-w-fit w-1/2 shrink-0 m-6 bg-base-100  mx-auto" tabIndex="0">
                <div className="card-body p-4">
                    <div className="flex justify-between divide-x-4 divide-dashed divide-base-100">
                        <div  className="flex flex-row justify-between basis-11/12 ">
                            <div id="ticket" className="flex flex-col place-content-around gap-2">
                                <div className="flex flex-row">
                                    <p  className="text-sm font-medium mr-2">
                                        {ticket.tripInfo.departureTime} - {ticket.tripInfo.arrivalTime}
                                    </p>
                                    <p className="text-sm font-medium mx-2">
                                        Umstiege: {ticket.tripInfo.changes -1}
                                    </p>
                                    <p className="text-sm font-medium mx-2">
                                        Dauer: {ticket.tripInfo.duration}
                                    </p>
                                    <p className="text-sm font-medium mx-2">
                                        {ticket.tarif}
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p  className="text-xs font-light">
                                        Abfahrt: <br/>{ticket.tripInfo.departure_station}
                                    </p>
                                    <p  className="text-xs font-light">
                                        Ankunft: <br/> {ticket.tripInfo.arrival_station}
                                    </p>
                                </div>
                                <hr className="solid"/>
                                <div className="flex flex-1 items-end justify-between text-sm ">
                                    <p className="text-xs">Menge: 1</p>

                                    <div className="flex">
                                        <button type="button"
                                                className="font-medium text-accent hover:text-accent">Entfernen
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default DrawerItem