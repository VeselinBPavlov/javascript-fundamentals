function autoEngineeringCompany(input) {
    let carCatalogue = new Map();

    for (let carData of input) {
        let [carBrand, carModel, producedCars] = carData.split(' | ');

        if (carCatalogue.has(carBrand) === false) {
            carCatalogue.set(carBrand, new Map());
        }

        let brand = carCatalogue.get(carBrand);
        if (brand.has(carModel) === false) {
            brand.set(carModel, 0);
        }
        brand.set(carModel, brand.get(carModel) + Number(producedCars));
    }

    for (let [brand, productModel] of carCatalogue) {
        console.log(brand);
        for (let [model, produced] of productModel) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}
