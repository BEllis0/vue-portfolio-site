const testimonialUrl = '/api/testimonials';

class TestimonialsApi {
    static getTestimonials() {
        return fetch(testimonialUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                return err;
            });
    }

    static postTestimonial(testimonial) {
        return fetch(`${testimonialUrl}/new`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(testimonial)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    static putTestimonial(id, columnName, value) {

        let payload = {
            id: id,
            columnName: columnName,
            value: value
        };

        return fetch(`${testimonialUrl}/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    static deleteTestimonial(id) {
        return fetch(`${testimonialUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }
}

export default TestimonialsApi;