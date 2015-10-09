var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlantListSchema = new Schema({
    type:String,
    group:Number,
    location:String,
    comment:String
});

var PlantList = mongoose.model('plist',PlantListSchema);

exports.plmodel = PlantList;