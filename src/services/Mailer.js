export default class Mailer {
    static send(mail) {
        var _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        return fetch("http://localhost:3000/contactme", {
            method: 'post',
            headers: _headers,
            body: JSON.stringify(mail)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then((responseData) => {
                            return responseData;
                        });
                }

                return response.json().
                    then((error) => {
                        return Promise.reject(error);
                    });
            });
    }
}