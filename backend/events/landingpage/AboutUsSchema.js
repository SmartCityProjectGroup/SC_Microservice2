const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
    title: "new newsletter post",
    type: "object",
    description: "Schema for the event to send a new about us",
    properties: {
        event_id : {
            type: "integer",
            "minimum": 0,
            "maximum": 10000
        },
        event_name: {
            type: "string",
            const: "Updated About US"
        },
        service_name: {
            type: "string",
            const: "stadtbus"
        },
        about_us : {
            type: "string"
        },
        picture_url: {
            type: 'string',
            format: 'uri',
            minLength: 1,
        },
        date: {
            type: 'string',
            format: 'date',
        },
    },
    required: ["event_id", "event_name","service_name", "about_us"],
    additionalProperties: false
}