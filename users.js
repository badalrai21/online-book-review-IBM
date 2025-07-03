let users = [];

const isValid = (username) => {
  // Check if username is already taken
  return !users.some(user => user.username === username);
};

const authenticateUser = (username, password) => {
  // Check if user with matching username and password exists
  return users.find(user => user.username === username && user.password === password);
};

module.exports = {
  users,
  isValid,
  authenticateUser
};
