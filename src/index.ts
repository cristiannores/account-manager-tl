import "express-async-errors";
import 'reflect-metadata';
import App from "./infraestructure/webserver/App";
const app = new App();
app.Start().catch((e)  => {
    console.log(e.message);
}).finally( () => {
    console.log('App full started');
})


