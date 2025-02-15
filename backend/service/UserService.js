'use strict';


/**
 * Create a new user
 *
 * body User 
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user by ID
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by ID
 *
 * id String 
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthdate" : "2000-01-23",
  "address" : {
    "zip" : "zip",
    "country" : "country",
    "city" : "city",
    "street" : "street"
  },
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of users
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "birthdate" : "2000-01-23",
  "address" : {
    "zip" : "zip",
    "country" : "country",
    "city" : "city",
    "street" : "street"
  },
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
}, {
  "birthdate" : "2000-01-23",
  "address" : {
    "zip" : "zip",
    "country" : "country",
    "city" : "city",
    "street" : "street"
  },
  "surname" : "surname",
  "name" : "name",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user by ID
 *
 * body User 
 * id String 
 * no response value expected for this operation
 **/
exports.updateUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

