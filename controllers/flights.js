const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}
function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      res.redirect(`/flights/${flight._id}`);
    });
  }
  function show(req, res) {
    console.log(Flight.findById(req.params.id))
   
  }