### Front End Interview Test API

This fake server uses `faker.js` and `json-server` in order to serve up fake location data.

Run default server with `npm start`, this will serve up the contents in `db.json`.

You may create a new `db.json` file by running the `generateDB.js` file and adjusting the `numberOfEntries` value.

We will be checking the final submission against the `final-test.json` file.

You may launch the server with the `final-test.json` file by running `npm run check`.

The API route that serves the data is `http://localhost:8000/locations`, and the data it serves up is of shape:
```
{
    "id": 0,
    "address": "293 Ova Extensions Koelpinstad New Hampshire, 86680-5255",
    "beds": 2,
    "baths": 0,
    "buildingType": "singleFamily"
}
```
