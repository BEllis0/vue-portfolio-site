const router = require('express').Router();
const controllers = require('./controllers.js');

// ==== GET routes
router.get('/web-applications', controllers.getWebApps);
router.get('/web-designs', controllers.getWebDesigns);

module.exports = router;