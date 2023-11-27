const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const { connectDb } = require('./conn');
const PORT = 3000;
const questionRouter = require("./router/question");
const answerRouter = require("./router/answer");


//midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(`${__dirname}/../frontend/build`)))


//mongodb connection
connectDb("mongodb+srv://bishalpaul34:qwerty2@cluster0.qhb870e.mongodb.net/ask-buddy?retryWrites=true&w=majority")
    .then(console.log("MongoDb connected successfully"))
    .catch((e) => console.log("At DB Connection", e));

//cors
app.use(cors());

//routes
// app.use('/', staticRouter);
app.use('/questions', questionRouter);
app.use('/answers', answerRouter);

app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
        // res.sendFile(path.join(`${__dirname}/../frontend`))
    } catch (error) {
        res.send("Oops! unexpected error")
    }
})

// server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`);
});