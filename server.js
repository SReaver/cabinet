const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://sergey:timhib-vigxo5-kiQsyp@cluster0-i5rut.mongodb.net/cabinet?retryWrites=true';
const events = require('./routes/api/events');

app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.send("Api Running"));
app.use('/api/posts', events);
app.use('/', events);

//app.use((req, res) => { res.status(404).render('Page not found') });
console.log('Connecting to MongoDB...');
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(result => {
        console.log('MongoDB successfully connected.');
        console.log('Local server is starting...');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Error connecting to Databse:', err.message);
    })