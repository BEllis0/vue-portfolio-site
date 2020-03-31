const webAppsUrl = '/api/web-applications';

class WebAppsApi {
    static getWebApps() {
        return fetch(webAppsUrl)
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

    static postWebApps(application) {
        return fetch(`${webAppsUrl}/new`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(application)
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

    static putWebApps(id, columnName, value) {

        let payload = {
            id: id,
            columnName: columnName,
            value: value
        };

        return fetch(`${webAppsUrl}/${id}`, {
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

    static deleteWebApps(id) {
        return fetch(`${webAppsUrl}/${id}`, {
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

export default WebAppsApi;