export default class ApiService {
    static sendMail(mail) {
        var _headers = new Headers();
        _headers.append('Content-Type', 'application/json');

        try {
            return fetch("http://localhost:3001/contactme", {
                method: 'POST',
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
                })
                .catch((error) => {
                    return Promise.reject(error);
                });
        } catch (error) {
            return Promise.reject(error);;
        }
    }
}