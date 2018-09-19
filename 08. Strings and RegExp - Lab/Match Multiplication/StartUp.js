function multiplication(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, a, b) => Number(a) * Number(b));
    console.log(text);
}