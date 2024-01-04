const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getQuestion, getAdvice, receiveAnswer } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/question", getQuestion);
app.get("/api/advice", getAdvice);
app.post("/api/answer", receiveAnswer);

app.listen(4000, () => console.log("Server running on 4000"));
