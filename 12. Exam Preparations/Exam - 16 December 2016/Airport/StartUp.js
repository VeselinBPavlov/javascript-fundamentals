function airport(input) {
    let land = [];
    let depart = [];
    let register = {};

    for (let line of input) {
        let [planeID, town, passengers, action] = line.split(' ');
        if (action === 'depart' && land.includes(planeID) === false) {
            continue;
        }
        if (action === 'land' && land.includes(planeID)) {
            continue;
        }
        if (register.hasOwnProperty(town) === false) {
            register[town] = {'arrivals':0, 'departures': 0, 'planes': []};
        }
        if (register[town]['planes'].includes(planeID) === false) {
            register[town]['planes'].push(planeID);
        }
        if (action === 'land') {
            land.push(planeID);
            register[town]['arrivals'] += Number(passengers);
            if (depart.includes(planeID)) {
                let departIndex = depart.indexOf(planeID);
                depart.splice(departIndex, 1);
            }
        } else if (action === 'depart') {
            register[town]['departures'] += Number(passengers);
            depart.push(planeID);
            let landIndex = land.indexOf(planeID);
            land.splice(landIndex, 1);
        }
    }

    let sortedTowns = Object.keys(register).sort((t1, t2) => {
       let difference = register[t2]['arrivals'] - register[t1]['arrivals'];
       if (difference === 0) {
           return t1.localeCompare(t2);
       }
       return difference;
    });

    console.log(`Planes left:`);
    if (land.length > 0) {
        land = land.sort((a, b) => a.localeCompare(b));
        land.forEach(x => console.log(`- ${x}`));
    }

    for (let town of sortedTowns) {
        console.log(town);
        console.log(`Arrivals: ${register[town]['arrivals']}`);
        console.log(`Departures: ${register[town]['departures']}`);
        console.log(`Planes:`);
        let sortedPlanes = register[town]['planes'].sort((p1, p2) => p1.localeCompare(p2));
        for (let plain of sortedPlanes) {
            console.log(`-- ${plain}`);
        }
    }
}

airport([
    'RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
    'RTA7!2 Warshaw 350 land',
    'RTA72 Riga -201 depart',
    'rta72 riga -13 land',
    'rta Riga -200 depart'
])


