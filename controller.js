const url = require('url');
const users = require('./userData.js');

exports.getUsers = function(req, res) {
  const response = {
    message: "Here is the list of users",
    users: users
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};
