function calculateConeVolumArea(r, h) {
    let volume = (1 / 3) * Math.PI * r * r * h;
    let area = (Math.PI * r * Math.sqrt((r * r) + (h * h))) + (Math.PI * r * r);

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}
