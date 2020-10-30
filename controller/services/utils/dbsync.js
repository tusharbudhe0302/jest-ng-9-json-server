const Members = require('../models/member.model');
const Teams = require('../models/team.model');

const membersSync = async () => {
    await Members.deleteMany();
    for (var i = 1; i <= 5; i++) {
        await Members.create({
            firstname: `fn ${i}`,
            lastname: `ln ${i}`,
            team: `team ${i}`,
            jobtitle:`job ${i}`,
            status: `active`
        });
    }
}
const teamSync = async () => {
    await Teams.deleteMany();
    for (var i = 1; i <= 5; i++) {
        await Teams.create({
            teamname: `team ${i}`,
        });
    }
}
module.exports.dbSync = {
    memberssync: membersSync,
    teamsync: teamSync
}