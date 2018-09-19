function usernames(names) {
    let usernamesList = new Set(names.sort(function sort(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }));

    for (let username of usernamesList) {
        console.log(username);
    }
}
