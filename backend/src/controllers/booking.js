const express = require("express");
const router = express.Router();
const pool = require('../db/database');
const { sendBookingMail } = require('../mailer/booking');

router.post('/booking', async (req, res) => {
  try {
    const { bus_id, price, username, email } = req.body;
    const newBooking = await pool.query(
      `INSERT INTO orders("bus_id", "price", "username", "email") VALUES($1, $2, $3, $4) RETURNING *`,
      [bus_id, price, username, email]
    )

    sendBookingMail(email, username);

    res.status(201);
    res.send(newBooking.rows[0]);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
});

module.exports = router;
