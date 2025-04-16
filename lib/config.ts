import * as process from "node:process";

export const config = {
    port: process.env.PORT || 3100,
    socketPort: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://@iot.l6cyw99.mongodb.net/IoT?retryWrites=true&w=majority',
};