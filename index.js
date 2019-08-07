const express = require("express");
const postRouter = require("./post/router.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(postRouter);
app.listen(port, () => console.log('Listening on :${port}'));
