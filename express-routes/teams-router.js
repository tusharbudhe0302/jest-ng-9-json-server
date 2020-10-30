const { send } = require('process');

const teamsController = require('../controller/teams').teamsController;

module.exports.teamsRoute = (routes) => {
    routes.get('/', (req, res, next) => {
        const teams = teamsController.getAllTeams();
        return res.status(200).send(teams);
    });
    routes.get('/:id', (req, res, next) => {
        if (!req.params.id) return res.status(400).send();
        const team = teamsController.getAllTeamById(req.params.id);
        if (!team) res.status(404).send();
        return res.status(200).send(team);
    });
    return routes;
}