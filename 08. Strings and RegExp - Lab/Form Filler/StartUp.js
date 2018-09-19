function formFiller(name, email, phone, text) {
    let patternName = /<![A-Za-z]*!>/g;
    let patternEmail = /<@[A-Za-z]*@>/g;
    let patternPhone = /<\+[A-Za-z]*\+>/g;

    for (let line of text) {
        console.log(line.replace(patternName, name).replace(patternEmail, email).replace(patternPhone, phone));
    }
}