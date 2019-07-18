const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// Create user
async function add(user) {
	const [id] = await db('users')
		.insert(user)
		.returning('id');

	return findById(id);
}

// Get all users
function find() {
	return db('users');
}

// Get user by filter
function findBy(filter) {
	return db('users').where(filter);
}

// Get user by id
function findById(id) {
	return db('users')
		.where({ id })
		.first();
}

// Update user
async function update(id, user) {
	await db('users')
		.where({ id })
		.update(user);

	return findById(id);
}

// Delete user
function remove(id) {
	return db('users')
		.where({ id })
		.del();
}
