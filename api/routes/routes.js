
const auth = require('../controllers/authController');
const bitacora = require('../controllers/bitacoraController');
const user = require('../controllers/userController');
const version = require('../controllers/versionController')

const multer = require('multer');
const uploads = multer({dest : 'static/img'});

const routes = function(app){

    app.route('/api/login')
    .post(auth.login);
    app.route('/api/registro')
    .post(user.registrar);

    // app.route('/api/prevencion/observacion/images')
    // .post(uploads.single('file'),prevencion.addObservationImages);

    app.route('/api/version')
    .get(version.versionActual);

    app.route('/api/acciones')
    .get(bitacora.findAll);

    app.route('/api/acciones/usuario/:usuario')
    .get(bitacora.findByUsername);

    app.route('/api/acciones/accion/:accion')
    .get(bitacora.findByAction);

    app.use(auth.validar);

    
    app.route('/api/logout')
    .get(user.logout);

    app.route('/api/testauth')
    .get(auth.testAuth)

}

module.exports = routes;