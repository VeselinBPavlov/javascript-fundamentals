function usernamesCreate(strArr) {
    let usernames = [];

    for (let email of strArr) {
        let tokens = email.split('@');
        let username = tokens[0] + '.';
        tokens[1].split('.').filter(s => s !== '').forEach(s => username += s[0]);
        usernames.push(username);
    }

    console.log(usernames.join(', '));
}
