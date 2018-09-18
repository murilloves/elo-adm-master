// https://elo-api.azurewebsites.net/swagger
// https://elo-api.azurewebsites.net/v1/questions

export const API = {
    dev: "http://localhost:8100/assets/json",
    baseDev: "/elo-api",
    base: "https://elo-api.azurewebsites.net/v1",
    proxyUrl: "https://elo-api.azurewebsites.net/v1",
};

export const Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAYdhtGQER6QoNs6txa-UwAy1l526S7V5I",
        authDomain: "elo-eventos.firebaseapp.com",
        databaseURL: "https://elo-eventos.firebaseio.com",
        projectId: "elo-eventos",
        storageBucket: "elo-eventos.appspot.com",
        messagingSenderId: "36831031378"
    }
};