const express = require("express");
const PORT = process.env.PORT;
const corsMiddleware = require("./config/cors");

app = express();
app.use(express.json());
app.use(corsMiddleware);

const bus_routes = require("./src/controllers/buses");
const booking_routes = require("./src/controllers/booking");

app.use(bus_routes);
app.use(booking_routes);

app.listen(PORT, () => {
  console.log("Started");
});
