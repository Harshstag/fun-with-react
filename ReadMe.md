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
