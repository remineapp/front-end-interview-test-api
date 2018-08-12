### Front End Interview Test API

#### Usage
This fake server uses `faker.js` and `json-server` in order to serve up fake data for our front end test.

Run default server with `npm start`, this will serve up the contents in `db.json`.

You may create a new `db.json` file by running the `generateDB.js` file and adjusting the `numberOfEntries` value contained inside it (minimum number of entries is 100).

We will be checking the final submission against the `final-test.json` file.

You may launch the server with the `final-test.json` file by running `npm run check`.

#### Data Shapes

The API route that serves the location data is `http://localhost:8001/locations`, and the data it serves up is of shape:
```
{
    "id": 0,
    "address": "293 Ova Extensions Koelpinstad New Hampshire, 86680-5255",
    "beds": 2,
    "baths": 0,
    "buildingType": "singleFamily"
}
```

The API route that serves the building types is `http://localhost:8001/buildingTypes`.  The response is:
```
[
  "multiFamily",
  "condo",
  "business",
  "office",
  "singleFamily"
]
```

The API route for all subscriptionPlans is `http://localhost:8001/subscriptionPlans`.  The response is:
```
[
  {
    "id": 1,
    "maxTrackedItems": 100,
    "creditsPerHousehold": 3,
    "price": {
      "currency": "",
      "value": "Free",
      "paymentInterval": ""
    },
    "additionalFeatures": [
      "Sell Scores"
    ]
  },
  {
    "id": 2,
    "maxTrackedItems": 250,
    "creditsPerHousehold": 2.5,
    "price": {
      "currency": "USD",
      "value": "29",
      "paymentInterval": "month"
    },
    "additionalFeatures": [
      "Sell Scores",
      "Value & Equity Maps"
    ]
  },
  {
    "id": 3,
    "maxTrackedItems": 500,
    "creditsPerHousehold": 1.5,
    "price": {
      "currency": "USD",
      "value": "99",
      "paymentInterval": "month"
    },
    "additionalFeatures": [
      "Sell Scores",
      "Value & Equity Maps"+
    ]
  },
  {
    "id": 4,
    "maxTrackedItems": 10000,
    "creditsPerHousehold": 1,
    "price": {
      "currency": "USD",
      "value": "199",
      "paymentInterval": "month"
    },
    "additionalFeatures": [
      "Sell Scores",
      "Value & Equity Maps"
    ]
  }
]
```

The API route for all users is `http://localhost:8001/user`.  You can request a single user object by appending the id to the previous URL like so: `http://localhost:8001/user/1`.  The data shape for a user is:
```
{
  "id": 1,
  "userPlan": {
    "planId": 1
  }
}
```
#### Known Solutions for Issues on Linux
If you are running the service on a Linux Distro and recieve an ENOSPC error after trying to use the `npm start` or `npm run check` command
1. First make sure you are not out of disk space by checking the output of the command below. If you notice a high percentage in the use column, you are running out of disk and need to clean up your hard drive  
```sh
df -h /
```
2. If you have no disk space issues, the error is most likely due to having vscode open while running the script. Try closing out of all instances of vscode and running the script in terminal before restarting vscode.
  - If you are on a Debian based distro (e.g: Ubuntu) and the above solution does not work you can try to run the following as a last resort.
  ```sh
  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  ```
