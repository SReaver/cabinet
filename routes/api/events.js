const express = require('express');
const router = express.Router();
const Event = require('../../models/Event');

router.post('/api/events', (req, res) => {
    console.log(req.body);
    const { title, date, type, address, description, imageUrl } = req.body;
    const event = new Event({ title, date, type, address, description, imageUrl });
    event.save()
        .then(result => {
            res.send('Event route');
        })
        .catch(error => {
            console.error(error.message);
            res.status(500).send('Server Error');
        })
});

router.get('/', (req, res) => {
    res.redirect('/api/events');
});
router.get('/api/events', (req, res) => {
    Event.find()
        .then(events => {
            console.log(events);
            res.json(events);
        })
        .catch(err => {
            res.send(err);
        })
})

router.get('/api/events/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            if (!event) {
                console.log('Event not found');
            }
            console.log(event);
            res.json(event);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: "Event not found" });
            }
            res.send(err);
        })
});
router.delete('/api/events/:id', (req, res) => {
    const eventId = req.params.id;
    console.log(eventId);
    Event.deleteOne({ _id: eventId })
        .then(() => {
            console.log('Event deleted');
            return res.status(200).json({ msg: "Event deleted'" });
        })
        .catch(err => {
            //console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: "Event not found" });
            }
            res.send(err);
        })
});

module.exports = router;