const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Job = require('./Job-model');
let jobs = require('./routes/jobs');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/notify', jobs);

// Connect to Mongo database
const URI = 'mongodb+srv://user1:test123@cluster0.98it7.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('MongoDB database connected');
});

// endpoints
app.get('/', (req, res) => {
    res.send('here')
});

app.get('/browse', (req, res) => {
    Job.find((err, job) => {
        if (err) {
            console.log(err);
        } else {
            res.json(job);
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});