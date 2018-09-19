function convertToUpperCase(str) {
    console.log(str.split(/\W+/).filter(w => w !== '')
        .map(w => w.toUpperCase()).join(', '));
}

convertToUpperCase("Hello,   JavaScript!");