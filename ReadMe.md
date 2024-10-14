```
Hooks - in React controls UI updatation
\_jsx - babbel
import {useState} from 'react';
useState
```

```

reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.


update
A change in the data used to render a React app. Usually the result of `setState`. Eventually
results in a re-render.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

 A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.


Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."




```

```
User Context Notes



import React, { createContext } from "react";

const UserContext = React.createContext();

export default UserContext;

```

```
Context Notes

import { createContext, useContext } from "react";

export const TodoContext = createContext({});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;

```

```
Redux toolkit

- Store
- reducer

- useSeclctor
- useDispatcher


npm install @reduxjs/toolkit
npm install react-redux

What's Included
Redux Toolkit includes these APIs:

configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
createAction(): generates an action creator function for the given action type string.

createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.

createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store

The createSelector utility from the Reselect library, re-exported for ease of use.

```
