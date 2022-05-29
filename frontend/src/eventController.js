import axios from 'axios'

const backendurl = "http://" + window.location.host +"/event/"
//test: funktioniert lokal aber nicht auf dem server

export async function sendCalendarEntry(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await axios.post(backendurl + "sendCalendarEntry", {
        event_id: 2002,
        event_name: "New Calendar Entry",
        service_name: "stadtbus",
        title: "Bus Event",
        short_description: "Smarte Events im Stadtbus",
        long_description: "Lorem Ipsum",
        event_on: "22.05.2022" }, requestOptions)
    return response.data
}


