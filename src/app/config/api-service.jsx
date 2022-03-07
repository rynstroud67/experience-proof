const ApiService = {
    get: (path, newAlert) => {
        return fetch(`https://app.dataconnector.com/api/${path}`, {
            method: "GET",
            credentials: 'include'
        }).then(res => {
            if (res.ok) {
                return res;
            } else {
                throw res.json();
            }
        })
        .catch(err => handleErr(err, newAlert));
    },
    post: (path, payload) => {
        return fetch(`https://app.dataconnector.com/api/${path}`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        }).then(res => {
            // console.log(res);
            return res;
        })
        .catch(err => {return err;})
    },
}

const handleErr = (err) => {
    alert(err.message);
    // newAlert(err.message, "error")
}

export const UserAPIService = {
    login: (url, credentials) => {
        return ApiService.post(url, credentials);
    }
    
}
