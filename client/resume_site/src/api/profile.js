
const profileUrl = '/api/profiles';

class ProfileApi {
    static getProfile(id) {
        return fetch(`${profileUrl}/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    static postProfile(profile) {
        return fetch(`${profileUrl}/new`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profile)
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

    static putProfile(id, columnName, value) {

        let payload = {
            id: id,
            columnName: columnName,
            value: value
        };

        return fetch(`${profileUrl}/${id}`, {
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

    static deleteProfile(id) {
        return fetch(`${profileUrl}/${id}`, {
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

export default ProfileApi;