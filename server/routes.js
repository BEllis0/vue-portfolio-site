const router = require('express').Router();
const controllers = require('./controllers.js');

// ==== PROFILE
router.get('/profiles/:id', controllers.get.getProfile);
router.post('/profiles/new', controllers.post.postProfile);
router.put('/profiles/:id', controllers.put.putProfile);
router.delete('/profiles/:id', controllers.delete.deleteProfile);

// ==== WEB APPLICATIONS
router.get('/web-applications', controllers.get.getWebApps);
router.post('/web-applications/new', controllers.post.postWebApps);
router.put('/web-applications/:id', controllers.put.putWebApps);
router.delete('/web-applications/:id', controllers.delete.deleteWebApps);

// ==== WEB DESIGNS
router.get('/web-designs', controllers.get.getWebDesigns);
router.post('/web-designs/new', controllers.post.postWebDesigns);
router.put('/web-designs/:id', controllers.put.putWebDesigns);
router.delete('/web-designs/:id', controllers.delete.deleteWebDesigns);

// ==== TESTIMONIALS
router.get('/testimonials', controllers.get.getTestimonials);
router.post('/testimonials/new', controllers.post.postTestimonials);
router.put('/testimonials/:id', controllers.put.putTestimonials);
router.delete('/testimonials/:id', controllers.delete.deleteTestimonials);

module.exports = router;