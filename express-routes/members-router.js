const { send } = require('process');

const membersController = require('../controller/members').membersController;

module.exports.membersRoute = (routes) => {
    routes.get('/', (req, res, next) => {
        const members = membersController.getAllMembers();
        return res.status(200).send(members);
    });
    routes.get('/:id', (req, res, next) => {
        if (!req.params.id) return res.status(400).send();
        const member = membersController.getAllMembersById(req.params.id);
        if (!member) res.status(404).send();
        return res.status(200).send(members);

    });
    return routes;
}