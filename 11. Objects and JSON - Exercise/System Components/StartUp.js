function systemComponents(input) {
    let systems = new Map();

    for (let sysData of input) {
        let [systemName, componentName, subcomponentName] = sysData.split(' | ');

        if (systems.has(systemName) ===false) {
            systems.set(systemName, new Map());
        }

        let component = systems.get(systemName);
        if (component.has(componentName) === false) {
            component.set(componentName, []);
        }

        let subcomponent = component.get(componentName);
        subcomponent.push(subcomponentName);
    }

    systems = new Map([...systems.entries()]
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
        .sort((a, b) => b[1].size - a[1].size));

    for (let [system, components] of systems) {
        let sortedComponents = new Map([...components.entries()]
            .sort((a, b) => b[1].length - a[1].length));
        systems.set(system, sortedComponents);
    }

    for (let [system, componentsList] of systems) {
        console.log(system);
        for (let [component, subcomponentsList] of componentsList) {
            console.log(`|||${component}`);
            for (let subcomponent of subcomponentsList) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);