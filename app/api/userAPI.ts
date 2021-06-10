import config from "../config"


export const fetchUsers = () => {
    return new Promise<Array<User>>((resolve, reject) => {
        fetch(config.constants.ENDPOINT_URI + 'users')
            .then(response => response.json())
            .then(json => JSON.parse(json))
            .then((users: Array<User>) => {
                if (users && users.length > 0) {
                    resolve(users);
                }
            }).catch(err => {
                reject(err)
            })
    })
}