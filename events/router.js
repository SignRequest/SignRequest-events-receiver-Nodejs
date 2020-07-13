const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.get("/signrequest-event-receiver", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;

  Event.findAll({ limit, offset })
    .then((allEvents) => res.json(allEvents))
    .catch(next);
});

router.post("/signrequest-event-receiver", (req, res, next) => {
  Event.create({
    Data: req.body
  })
    .then(console.log(req.body))
    .then((newEvent) => res.status(201).json(newEvent))
    .catch(next);
});

module.exports = router;
