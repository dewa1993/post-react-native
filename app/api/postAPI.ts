import config from "../config"


export const fetchPosts = () => {
    return new Promise<Array<Post>>((resolve, reject) => {
        fetch(config.constants.ENDPOINT_URI + 'posts')
            .then(response => response.json())
            .then(json => JSON.parse(json))
            .then((users: Array<Post>) => {
                if (users && users.length > 0) {
                    resolve(users);
                }
            }).catch(err => {
                reject(err)
            })
    })
}
