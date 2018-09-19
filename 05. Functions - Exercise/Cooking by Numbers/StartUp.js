function numManupulator(input) {
    let num = input[0];

    for (let i = 1; i < input.length; i++) {
        let manipulator = input[i];

        if (manipulator === "chop") {
            num = num / 2;
            console.log(num);
        } else if (manipulator === "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (manipulator === "spice"){
            num++;
            console.log(num);
        } else if (manipulator === "bake") {
            num = num * 3;
            console.log(num);
        } else if (manipulator === "fillet") {
            num = num - (num * 0.2);
            console.log(num);
        }
    }
}
