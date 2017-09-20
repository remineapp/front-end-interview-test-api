const faker = require('faker');
const jsonfile = require('jsonfile');

const numberOfEntries = 1000;

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
    locations: []
};

for (var i = 0; i < numberOfEntries; i++) {
    const generatedJsonObject = {
        "id": i,
        "address": generateStreetAddress(),
        "beds": faker.random.number(4),
        "baths": faker.random.number(4),
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
