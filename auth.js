function isValidUser(username, password) {
    return username === 'admin' && password === 'admin';
  }
  
module.exports = { isValidUser };