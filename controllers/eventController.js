/**
 * Created by wasim on 26/6/17.
 */

var mongoose = require('mongoose'),
    Event = mongoose.model('Event');


exports.index = function(req, res) {
    Event.find({}, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.list_all_events = function(req, res) {
    Event.find({}, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};


exports.read_an_event = function(req, res) {
    Event.findById(req.params.eventId, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.create_an_event = function(req, res) {
    var new_event = new Event(req.body);
    new_event.save(function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};


exports.delete_an_event = function(req, res) {


    Event.remove({
        _id: req.params.eventId
    }, function(err, event) {
        if (err)
            res.send(err);
        res.json({ message: 'Event successfully deleted' });
    });
};




exports.update_an_event = function(req, res) {
    Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.get_an_event = function (req, res) {
    Event.find({Event_date : req.params.date}, req.body, {new: true}, function(err,event){
        if(err)
            res.send(err);
        res.json(event);
    });
};


