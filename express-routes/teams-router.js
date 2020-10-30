const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');

const teamsController = require('../controller/teams').teamsController;

module.exports.teamsRoute = (routes) => {
    routes.get('/teams', async (req, res, next) => {
        const teams = await teamsController.getAllTeams();
        return res.status(200).send(teams);
    });
    routes.get('/teams/:id', async (req, res, next) => {
        if (!req.params.id) return res.status(400).send();
        const team = await teamsController.getAllTeamById(req.params.id);
        if (!team) res.status(404).send();
        return res.status(200).send(team);
    });
    return routes;
}