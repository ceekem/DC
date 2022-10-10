# Setting up the application

## Enviroment to intall

Install nodejs

node version used

`node v14.17.6`

Install Mongodb compass for backend database

Mongodb compass used

`Mongodb compass v1.33.0`

After downloading the repo, you should run the command below: 

### `npm install` 

Install the project packages.


## To running the application

In the project directory, you should run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Setting up the backend for saving data

In the backend directory found in the root of the project, you should run:

### `npm install`

Install the backend packages.
Change the connection string in the .env file to connect to your mongodb.

Run the command below to start the backend server

### `node app.js`

it will run on port:3001.
Open [http://localhost:3001](http://localhost:3001) to see a backend it in your browser


## Additional Functionality Added

1. Functionality to store data gathered from the TOM API
2. Allowing users to pick any model from the TOM API
3. Save Decision and View in a table.
4. Delete saved decisions.

## Frontend Tech used Reactjs

## Backend Tech used Express.js, Mongodb and Mongoose