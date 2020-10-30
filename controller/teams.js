const fs = require('fs');
// const db = JSON.parse(fs.readFileSync('db.json'));
let db;
const getAllTeams = () => {
    db = JSON.parse(fs.readFileSync('db.json'));
    return db.teams;
}
const getAllTeamById = (id) => {
    db = JSON.parse(fs.readFileSync('db.json'));
    return db.teams[id - 1];
}
module.exports.teamsController = {
    getAllTeams: getAllTeams,
    getAllTeamById: getAllTeamById
}
