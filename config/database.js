/*eslint-env node */
var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://localhost:27017/exampleDb';

module.exports = {
	url : mongourl
};
