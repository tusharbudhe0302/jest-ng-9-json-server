const mongoose = require('../utils/dbconnection').mongoose;
const uuid = require('uuid');

const teamSchema = new mongoose.mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    teamname: {
        type: String,
        required: true
    }
},
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified'
        },
        versionKey: false
    });
module.exports = mongoose.mongoose.model('team', teamSchema);