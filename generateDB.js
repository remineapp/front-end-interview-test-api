const faker = require('faker');
const jsonfile = require('jsonfile');

//Minimum number of entries is 100
const numberOfEntries = 1000;

if (numberOfEntries < 100) {
    numberOfEntries = 100;
}

const generateStreetAddress = () => {
    const streetAddress = faker.address.streetAddress();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();
    const state = faker.address.state();
    return `${streetAddress} ${city} ${state}, ${zipCode}`;
}

const buildingTypes = [
    "multiFamily",
    "condo",
    "business",
    "office",
    "singleFamily"
];

const jsonFile = 'db.json';

let jsonOutput = {
    locations: [],
    buildingTypes
};

for (var i = 0; i < numberOfEntries; i++) {
    let numberOfBeds;
    let numberOfBaths;

    if (i === 25 || i === 20 || i === 35) {
        numberOfBeds = 6;
    } else if (i === 68) {
        numberOfBeds = "4";
    } else if (i === 75) {
        numberOfBeds = 98;
    } else {
        numberOfBeds = faker.random.number(4);
    }

    if (i === 20 || i === 12 || i === 47) {
        numberOfBaths = 5;
    } else if (i === 90) {
        numberOfBaths = null;
    } else {
        numberOfBaths = faker.random.number(4);
    }

    const generatedJsonObject = {
        "id": i,
        "address": generateStreetAddress(),
        "beds": numberOfBeds,
        "baths": numberOfBaths,
        "buildingType": faker.random.arrayElement(buildingTypes)
    };

    jsonOutput.locations.push(generatedJsonObject);
}

jsonfile.writeFile(jsonFile, jsonOutput, { spaces: 4 }, err => {
    if (err) {
        console.error('blahrg: ', err);
    } else {
        console.log('done');
    }
});
