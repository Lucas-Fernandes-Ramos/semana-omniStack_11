const express  = require("express");
const routes = express.Router();
const OngController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//ongs
//listando os dados
routes.get('/ongs', OngController.index);
//salvando os dados da tabela ongs no banco de dados
routes.post('/ongs', OngController.create);

//incidents
routes.get('/incidents',IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile',ProfileController.index);

routes.post('/session', SessionController.create);

 module.exports = routes;