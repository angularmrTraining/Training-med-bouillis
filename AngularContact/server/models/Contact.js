var 
    _ = require('underscore'),
    mongoosePaginate = require('mongoose-paginate');
module.exports = function(mongoose) {
    var Schema = mongoose.Schema,
        deepPopulate = require('mongoose-deep-populate')(mongoose);
    var ContactSchema = new Schema({
        username: String,
        lastname: String,
        email: String,
        firstName: String,
        lastName: String,
        email: {type:String,unique:true}
    });
    // generating a hash

    // checking if password is valid
    ContactSchema.plugin(mongoosePaginate);
    module.exports = mongoose.model('Contact', ContactSchema);
}