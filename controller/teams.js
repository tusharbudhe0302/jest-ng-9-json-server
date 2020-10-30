const Teams = require('./services/models/team.model');

const getAllTeams = async () => {
    return await Teams.find({});
}
const getAllTeamById = async (id) => {
    return await Teams.findById(id);
}
module.exports.teamsController = {
    getAllTeams: getAllTeams,
    getAllTeamById: getAllTeamById
}
