require('dotenv').config();
const express = require('express');
// Step 1: import Sentry at the top of server.js (underneath express)
// TODO
const Sentry = require('@sentry/node');

// Importing Middleware
const middleware = require('./middleware/config');
const authenticate = require('./middleware/authenticate');
const errorMiddleware = require('./middleware/errorReporting');

// Importing Controllers
const authController = require('./controllers/auth');
const usersController = require('./controllers/users');

// Initializations
const server = express();
// Step 4: Initialize Sentry in server.js
// TODO
Sentry.init({ dsn: process.env.SENTRY_DSN });

// Middleware
middleware(server);

// Controllers
server.use('/api/auth', authController);
server.use('/api/users', usersController);

// Step 5C: Pass the server through an errorMiddleware function
// TODO
errorMiddleware(server);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Sanity check' });
});

if (require.main == module) {
	server.listen(process.env.PORT, () => {
		console.log(`Server is running at http://localhost:${process.env.PORT}/`);
	});
} else {
	module.exports = server;
}

// Steps to implement Sentry in your Express App

// Step 0: make sure you register online at Sentry.io and set up a project to get your DSN key.

// Step 1B: Run this command `yarn add @sentry/node@5.5.0`

// Step 1A: import Sentry at the top of server.js like so:
// const Sentry = require('@sentry/node');

// Step 2: Create a .env file if you have not already at the same level in the directory as server.js. If this is your first time creating a .env file, make sure to run this command `yarn add dotenv` then require it at the top of server.js like so: require('dotenv').config();

// Step 3: After making a .env file, add your Sentry DSN key in your .env file like so:
// SENTRY_DSN='https://20213c8615a0457d9370b74ff457614fd@sentry.io/12346740'
// You will get your Sentry key when you register online at Sentry.io

// Step 4: Initialize Sentry in server.js under you server initialization like so:
// Sentry.init({ dsn: process.env.SENTRY_DSN });

// Step 5A: Create an errorReporting.js file in /middleware and input this code:
// const Sentry = require('@sentry/node');

// module.exports = server => {
// 	server.use(Sentry.Handlers.errorHandler());
// };

// Step 5B: Import the errorReporting file that you created in Step 5A like so:
// const errorMiddleware = require('./middleware/errorReporting');

// Step 5C: Pass the server through an errorMiddleware function like so:
// errorMiddleware(server);

// Step 6: In the middleware/config.js import Sentry at the top of the file and add this line in the module.exports as the first line like so:
// server.use(Sentry.Handlers.requestHandler());

// Step 7: Add this line in any catch error block in your routes/controllers like so:
// throw new Error(err);
