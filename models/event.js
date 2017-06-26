/**
 * Created by wasim on 26/6/17.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Event = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the event'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    Event_date: {
        type: Date,
        default: Date.now
    },
    guests: {
        type: [{
            type: String,
            default: String('wasim@domain.com')

        }]
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Event', Event);