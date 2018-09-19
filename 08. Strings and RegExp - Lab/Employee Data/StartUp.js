function validateData(employeeData) {
    let pattern =/^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/;

    for (let line of employeeData) {
        let data = pattern.exec(line);
        if (data === null) {
            continue;
        }
        console.log(`Name: ${data[1]}`);
        console.log(`Position: ${data[3]}`);
        console.log(`Salary: ${data[2]}`);
    }
}

validateData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']);
