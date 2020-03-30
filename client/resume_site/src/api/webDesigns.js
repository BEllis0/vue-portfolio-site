const webDesignUrl = 'http://localhost:5000/api/web-applications';

class WebDesignsApi {
    static getWebDesigns() {
        return fetch(webDesignUrl)
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

    static postWebDesigns(design) {
        return fetch(`${webDesignUrl}/new`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(design)
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

    static putWebDesigns(id, columnName, value) {

        let payload = {
            id: id,
            columnName: columnName,
            value: value
        };

        return fetch(`${webDesignUrl}/${id}`, {
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

    static deleteWebDesigns(id) {
        return fetch(`${webDesignUrl}/${id}`, {
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

export default WebDesignsApi;