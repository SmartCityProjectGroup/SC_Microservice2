import { ShoppingCart } from 'tabler-icons-react';
import { ChevronRight } from 'tabler-icons-react';
import {Select} from "@mantine/core";



function Ticket({children, route}){

    const handleClick = () => {

    }


    return(
        <div className="card rounded-md min-w-fit shrink-0 m-6 bg-base-200 shadow-xl collapse" tabIndex="0">
                <div className="card-body p-4 collapse-title">
                    <div className="flex justify-between divide-x-4 divide-dashed divide-base-100 ">
                        <div className="flex flex-row justify-between basis-11/12">
                            <div className="flex flex-col place-content-around gap-2">
                                    <div className="flex flex-row">
                                        <p  className="text-xl font-medium mr-2">
                                            {route.departureTime} - {route.arrivalTime}
                                        </p>
                                        <p className="text-lg font-medium mx-2">
                                            Umstiege: {route.changes -1}
                                        </p>
                                        <p className="text-lg font-medium mx-2">
                                            Dauer: {route.duration}
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p  className="text-sm font-medium">
                                            Abfahrt: <br/>{route.departure_station}
                                        </p>
                                        <p  className="text-sm font-medium">
                                            Ankunft: <br/> {route.arrival_station}
                                        </p>
                                    </div>
                            </div>
                                <div className="p-4">
                                    <Select
                                        data={['Einzelfahrt', 'Familientarif']}
                                        label="Tarife"
                                        defaultValue={'Einzelfahrt'}
                                        styles={{
                                            input: {borderRadius: 10}
                                        }}
                                    />
                                </div>
                        </div>
                        <div className="basis-1/12 p-6 place-self-center hover:bg-base-300 rounded-lg" onClick={handleClick}>
                                <ShoppingCart  size={30}
                                               style={{margin: 0,placeSelf: "center"}}
                                               strokeWidth={2}
                                />

                            <p  className="text-xs font-medium mt-2">
                                Preis
                            </p>
                        </div>
                    </div>
                </div>
                <div className="collapse-content h-auto ">
                   {route.steps.map((step) => {
                        if(step.travel_mode ==="WALKING")
                            return (
                                <div className="flex flex-row">
                                    <p  className="text-sm font-medium mr-2">
                                        {step.duration.text} {step.instructions}
                                    </p>
                                </div>
                            )
                        else
                           return(
                           <div className="m-6">
                                   <div className="flex flex-row">
                                       <p  className="text-lg font-semibold font-medium mr-2">
                                           {step.transit.departure_time.text} - {step.transit.arrival_time.text}
                                       </p>
                                       <p  className="text-lg font-medium">
                                           Linie: {step.transit.line.short_name}  {step.transit.headsign}
                                       </p>
                                   </div>
                                   <div className="flex flex-row gap-6">
                                       <p  className="text-xs font-medium">
                                            Abfahrt: <br/>{step.transit.departure_stop.name}
                                        </p>
                                       <p  className="text-xs font-medium">
                                           Ankunft: <br/> {step.transit.arrival_stop.name}
                                       </p>
                                   </div>
                           </div>
                   )})}
                </div>
            </div>
        )
}

export default Ticket