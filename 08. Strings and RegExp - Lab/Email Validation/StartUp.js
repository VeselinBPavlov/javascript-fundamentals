function emailValidation(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;

    if (pattern.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

