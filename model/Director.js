const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  
  name: {
	type: String
  },
  surname: String,
  bio: String,
  director_id: Schema.Types.ObjectId,
  createAt: { 
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('director', DirectorSchema);                                        