# React useEffect Cleanup Function Bug
This repository demonstrates a common bug related to the cleanup function within React's `useEffect` hook.  Improper cleanup can lead to memory leaks or unexpected behavior, especially when dealing with subscriptions, timers, or event listeners.

## Bug Description
The `bug.js` file contains a component with an `useEffect` hook. The cleanup function (returned by `useEffect`) is incorrectly implemented. While seemingly harmless, this can lead to memory leaks or other unexpected side effects in more complex applications.

## Solution
The `bugSolution.js` file shows the corrected implementation of the `useEffect` hook, demonstrating the correct usage of the cleanup function.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install necessary dependencies.
4. Run `npm start` to start the development server.

You can observe the difference in behavior between the buggy and the corrected implementation.
