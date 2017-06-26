/**
 * Created by wasim on 26/6/17.
 */
module.exports = function(app) {
    var eventList = require('../controllers/eventController');


    // todoList Routes
    app.route('/events')
        .get(eventList.list_all_events)
        .post(eventList.create_an_event);


    app.route('/event/:eventId')
        .get(eventList.read_an_event)
        .put(eventList.update_an_event)
        .delete(eventList.delete_an_event);
};
