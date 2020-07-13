const express = require("express");
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const eventsRouter = require('./events/router')

const app = express();

app.use(jsonParser)
app.use(eventsRouter)

app.get("/", (req, res) => res.send("Server running"));

app.listen(port, () => console.log(`App listening on port ${port}`));
