// TODO import Sentry
const Sentry = require('@sentry/node');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

module.exports = server => {
	// TODO Add Sentry
	server.use(Sentry.Handlers.requestHandler());
	server.use(express.json());
	server.use(bodyParser.json());
	server.use(helmet());
	server.use(morgan('dev'));
	server.use(cors());
};
