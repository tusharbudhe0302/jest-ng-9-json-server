const fs = require('fs');
const path = require('path');

let db ;
const getAllMembers = () => {
    db = JSON.parse(fs.readFileSync('db.json'));;
    return db.members;
}
const getAllMembersById = (id) => {
    db = JSON.parse(fs.readFileSync('db.json'));
    return db.members[id - 1];
}
module.exports.membersController = {
    getAllMembers: getAllMembers,
    getAllMembersById: getAllMembersById
}
