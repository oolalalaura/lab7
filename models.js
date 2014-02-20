	
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "summary": String,
  "image": Object 
});

exports.Project = Mongoose.model('Project', ProjectSchema);


