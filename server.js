const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const hsts = require('hsts');
const path = require('path');
const xssFilter = require('x-xss-protection');
const nosniff = require('dont-sniff-mimetype');
const morgan = require('morgan');


const port = process.env.PORT || 3000;

const app = express();
const routes = express.Router();

const membersRoutes = require('./express-routes/members-router').membersRoute(routes);
const teamsRoutes = require('./express-routes/teams-router').teamsRoute(routes);

app.use(express.static(path.join(__dirname, 'dist/f1-track'), { etag: false }));
app.use(cors());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.use(xssFilter());
app.use(nosniff());
app.set('etag', false);
// To setup policy
app.use(helmet({ noCache: false }));
// 180 days in seconds
app.use(hsts({ maxAge: 15552000 }));
app.use((req, res, next) => {
    // Middleware logic for JWT verification
    next();
});
app.set('enableLogger', true);
app.use(morgan('combined'));

app.use('/api/memebers', membersRoutes);
app.use('/api/teams', teamsRoutes);

app.get("*", (res) => {
    res.sendFile(path.join(__dirname, 'dist/f1-track/index.html'));
});

app.listen(port, () => {
    console.log(`Vrrrum Vrrrum! Server ${port} starting!`);
});
