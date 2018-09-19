function splitExp(str) {
    let pattern = /[\s(),.;]/;

    let result = str.split(pattern).filter(x => x !== '');

    console.log(result.join('\n'));
}
