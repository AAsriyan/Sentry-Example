const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{
			email: 'microsoft@microsoft.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'apple@apple.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'github@github.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'nexient@nexient.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'netflix@netflix.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'twitter@twitter.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'spotify@spotify.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'facebook@facebook.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'reddit@reddit.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'google@google.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'sam@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'john@gmail.com',
			password: bcrypt.hashSync('password', 10)
		},
		{
			email: 'sally@gmail.com',
			password: bcrypt.hashSync('password', 10)
		}
	]);
};
