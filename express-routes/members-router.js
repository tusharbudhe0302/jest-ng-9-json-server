const { send } = require('process');

const membersController = require('../controller/members').membersController;

module.exports.membersRoute = (routes) => {
    routes.get('/members', async (req, res, next) => {
        try {
            const members = await membersController.getAllMembers();
            return res.status(200).send(members);
        } catch (ex) {
            next(ex);
        }
    });
    routes.get('/members/:id', async (req, res, next) => {
        try {
            if (!req.params.id)  throw new Error({ status: 400, error: `Members id required` });
            const member = await membersController.getAllMembersById(req.params.id);
            if (!member) res.status(404).send();
            return res.status(200).send(members);
        } catch (ex) {
            next(ex);
        }
    });
    routes.post('/members', async (req, res, next) => {
        try {
            if (!req.body || !req.body.firstname || !req.body.lastname || !req.body.team || !req.body.status)
             throw new Error({ status: 400, error: `firstname,lastname,team,status, id required` });
            const member = await membersController.createMember(req.body);
            return res.status(201).send(member);
        } catch (ex) {
            next(ex);
        }
    });
    return routes;
}