import * as config from '../utils';

export function login(username, password) {
    const configheader = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password}),
    };

    return fetch(`/api/login`, configheader)
        .then((response) => response.json())
        .then((responseJson) => responseJson);

}

export function checklogin() {

    return fetch(`/api/get-info`)
        .then((response) => response.json())
        .then((responseJson) => responseJson);

}
