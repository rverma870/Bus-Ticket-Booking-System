const cors = require("cors");

const corsOptions = {
  origin: process.env.allowed_origin,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
};

module.exports = cors(corsOptions);
