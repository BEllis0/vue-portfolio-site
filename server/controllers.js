// const models = require('./models');

module.exports = {
    get: {
        getProfile: (req, res) => {
            res.json('profile fetched');
        },
        getWebApps: (req, res) => {
            res.json('web apps fetched');
        },
        getWebDesigns: (req, res) => {
            res.json('web designs fetched');
        },
        getTestimonials: (req, res) => {
            res.json('testimonials fetched');
        }
    },
    post: {
        postProfile: (req, res) => {
            res.json('profile added');
        },
        postWebApps: (req, res) => {
            res.json('web app added');
        },
        postWebDesigns: (req, res) => {
            res.json('web design added');
        },
        postTestimonials: (req, res) => {
            res.json('testimonial added');
        }
    },
    put: {
        putProfile: (req, res) => {
            res.json('profile changed');
        },
        putWebApps: (req, res) => {
            res.json('web apps changed');
        },
        putWebDesigns: (req, res) => {
            res.json('web designs changed');
        },
        putTestimonials: (req, res) => {
            res.json('testimonials changed');
        }
    },
    delete: {
        deleteProfile: (req, res) => {
            res.json('profile deleted');
        },
        deleteWebApps: (req, res) => {
            res.json('web apps deleted');
        },
        deleteWebDesigns: (req, res) => {
            res.json('web designs deleted');
        },
        deleteTestimonials: (req, res) => {
            res.json('testimonials deleted');
        }
    }
};