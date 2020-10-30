const Members = require('./services/models/member.model');

const getAllMembers = async () => {
    try {
        const result = await Members.find({});;
        return result
    }
    catch (ex) {
        throw new Error({ status: 500, error: ex });
    }

}
const getAllMembersById = async (id) => {
    try {
        return await Members.findById(id);
    }
    catch (ex) {
        throw new Error({ status: 500, error: ex });
    }
}
const createMember = async (member) => {
    try {
        await Members.create({
            firstname: member.firstname,
            lastname: member.lastname,
            team: member.team,
            status: member.status,
        });
        return response;
    }
    catch (ex) {
        throw new Error({ status: 500, error: ex });
    }
}
module.exports.membersController = {
    getAllMembers: getAllMembers,
    getAllMembersById: getAllMembersById,
    createMember: createMember
}
