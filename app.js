/**
 * Created by wasim on 26/6/17.
 */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event = require('./models/event'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://wasim:wasim@ds139122.mlab.com:39122/calendar');


app.use(bodyParser.urlencoded({ extended: true })); // Thought of a website earlier, that's okay.
app.use(bodyParser.json());


var routes = require('./routes/eventRoute');
routes(app);


app.listen(port);


console.log('Events at ' + port);
