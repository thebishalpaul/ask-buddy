const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const { connectDb } = require('./conn');
const PORT = 3000;
const questionRouter = require("./router/question");
const answerRouter = require("./router/answer");
const dotenv = require("dotenv");


dotenv.config();


//midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(`${__dirname}/../frontend/build`)))


//mongodb connection
connectDb(process.env.MONGO_URL)
    .then(console.log("MongoDb connected successfully"))
    .catch((e) => console.log("At DB Connection:", e));

//cors
app.use(cors());

//routes
app.use('/questions', questionRouter);
app.use('/answers', answerRouter);

app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch (error) {
        res.send("Oops! unexpected error")
    }
})

// server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`);
});