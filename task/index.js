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

// Event reducer
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

// Curried function to log and dispatch events
const logActions = (logger) => (reducer) => (state, event) => {
  logger(event);
  return reducer(state, event);
};

const consoleLogger = (event) => console.log("Dispatching event:", event);

const dispatchEvent = logActions(consoleLogger)(EventReducer);

// Undo and Redo functionality
const createHistory = (initialState) => ({
  past: [],
  present: initialState,
  future: [],
});

const history = createHistory(dataStore);

// Curried Undo and Redo functions
const undoAction = (history) => () => {
  const { past, present, future } = history;
  if (past.length === 0) return;
  const lastState = past.pop();
  history.future.push(present);
  history.present = lastState;
};

const redoAction = (history) => () => {
  const { past, present, future } = history;
  if (future.length === 0) return;
  const nextState = future.pop();
  past.push(present);
  history.present = nextState;
};

// Curried dispatch with history
const dispatchWithHistory = (dispatch, history) => (event) => {
  const { past, present } = history;
  history.past.push(present);
  history.future.length = 0; // clear future on new action
  history.present = dispatch(present, event);
};

// Testing the setup
function main() {
  const dispatch = dispatchWithHistory(dispatchEvent, history);
  console.log("Initial:", dataStore);

  dispatch({
    type: "ADD_USER",
    payload: { id: 1, name: "Bisrat Kebere" },
  });
  console.log("After ADD_USER:", history.present);

  dispatch({
    type: "LOGIN_USER",
    payload: { id: 1, name: "Bisrat Kebere" },
  });
  console.log("After LOGIN_USER:", history.present);

  dispatch({
    type: "ADD_ITEM",
    payload: { id: 101, name: "Tikus Biskut" },
  });
  console.log("After ADD_ITEM:", history.present);

  undoAction(history)();
  console.log("After undo:", history.present);

  redoAction(history)();
  console.log("After redo:", history.present);
}

main();
