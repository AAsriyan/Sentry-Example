const router = require('express').Router();
const Users = require('../models/Users');

// Find All Users
router.get('/', async (req, res) => {
	try {
		const users = await Users.find();

		if (users.length <= 0)
			return res.status(404).json({
				message: 'Sorry, but there are no users in the database.'
			});

		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({
			message: 'Sorry, but something went wrong while getting the users'
		});

		// TODO throw new error for Sentry
		throw new Error(err);
	}
});

module.exports = router;
