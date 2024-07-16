# Functional Programming State Management

This repository demonstrates a simple implementation of state management using functional programming principles in JavaScript. It leverages the `immer` library for immutability and follows guidelines to ensure pure functions, function composition, and currying.

Task details can be found [here](https://docs.google.com/document/d/1Cwo4jRmbGHoIp_F3yMXM43E_8-9E23AYxKNdHPRvuyM/edit).

## Features

- **Immutability**: State updates are handled immutably using the `produce` function from `immer`.
- **Pure Functions**: The state reducer and other helper functions are pure, ensuring they are deterministic and side-effect-free.
- **Function Composition**: Functions are composed for modularity and reusability.
- **Curried Functions**: Functions are curried to facilitate code reuse and memoization.
- **Logging**: Actions are logged to the console for easy debugging and traceability.
- **Undo/Redo Functionality**: Provides the ability to undo and redo state changes.

## Project Structure

- `dataStore`: The single source of truth for the application state.
- `EventReducer`: A pure function to handle state updates based on dispatched events.
- `logActions`: A curried function to log events and then dispatch them to the reducer.
- `undoAction` and `redoAction`: Curried functions to manage undo and redo functionality.
- `dispatchWithHistory`: A function that manages state history for undo and redo capabilities.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/bisry/iCog-functional-programming.git
   cd iCog-functional-programming
   ```

2. Change directory to the task folder:
   ```sh
    cd task
   ```
3. Install dependencies:

   ```sh
    npm install
   ```

4. Run the application:

   ```sh
    npm start
   ```

5. Run the test main function:

   ```sh
    node test.js
   ```
