const mongoose  = require('../utils/dbconnection').mongoose;
const uuid = require('uuid');

const memberSchema = new mongoose.mongoose.Schema ({
    _id: {
        type: String,
        default: uuid.v1
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    status: {
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
module.exports = mongoose.mongoose.model('member', memberSchema);