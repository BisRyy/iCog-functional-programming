const { produce } = require("immer");

// Data store
let dataStore = {
  users: [],
  items: [],
  auth: {
    loggedIn: false,
    user: null,
  },
};

console.log("Initial data store", dataStore);