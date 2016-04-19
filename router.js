'use strict';

module.exports = function(app) {

	var styleguideController = require('./controllers/styleguide');

	app.get('/', styleguideController.get);

};
