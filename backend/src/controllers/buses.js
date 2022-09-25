const express = require("express");
const router = express.Router();
const pool = require("../db/database");

router.get("/buses", async (req, res) => {
  try {
    const { origin, destination, schedule_date } = req.query;
    const date = new Date(schedule_date).toLocaleDateString();

    var query = `SELECT * FROM "buses" where 1=1`;

    if (origin) {
      query = query + ` and LOWER(origin) = '${origin.toLowerCase()}'`;
    }

    if (destination) {
      query =
        query +
        ` and LOWER(destination) = '${destination.toLocaleLowerCase()}'`;
    }

    if (schedule_date) {
      query = query + ` and CAST("schedule_date" as Date) = '${date}'`;
    }

    const buses = await pool.query(query);

    res.status(200);
    res.send(buses.rows);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
});

router.post("/buses", async (req, res) => {
  try {
    const { name, origin, destination, schedule_date, price } = req.body;
    const newBus = await pool.query(
      `INSERT INTO buses("name", "origin", "destination", "schedule_date", "price") VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, origin, destination, schedule_date, price]
    );
    res.status(201);
    res.send(newBus.rows[0]);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
});

module.exports = router;
