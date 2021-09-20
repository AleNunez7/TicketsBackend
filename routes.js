const express = require("express");
const router = express.Router();
const ticketController = require("./controllers/ticketsController");

router.get("/tickets", ticketController.getTickets);

module.exports = router;
