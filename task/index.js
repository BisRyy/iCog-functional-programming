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

function EventReducer(state, event) {
  switch (event.type) {
    case "ADD_USER":
      return produce(state, (draft) => {
        draft.users.push(event.payload);
      });
    case "ADD_ITEM":
      return produce(state, (draft) => {
        draft.items.push(event.payload);
      });
    case "LOGIN_USER":
      return produce(state, (draft) => {
        draft.auth.loggedIn = true;
        draft.auth.user = event.payload;
      });
    case "LOGOUT_USER":
      return produce(state, (draft) => {
        draft.auth.loggedIn = false;
        draft.auth.user = null;
      });
    default:
      throw new Error("Unhandled event type " + event.type);
  }
}

// Testing the setup
function main() {
  let state = dataStore;
  state = EventReducer(state, {
    type: "ADD_USER",
    payload: { id: 1, name: "Bisrat Kebere" },
  });
  console.log("After ADD_USER:", state);

  state = EventReducer(state, {
    type: "LOGIN_USER",
    payload: { id: 1, name: "Bisrat Kebere" },
  });
  console.log("After LOGIN_USER:", state);

  state = EventReducer(state, {
    type: "ADD_ITEM",
    payload: { id: 101, name: "Tikus Biskut" },
  });
  console.log("After ADD_ITEM:", state);
}

main();
