---
title: Decomposition
sidebar_position: 3
---

# Decomposition

So far our example build system, `cc main.c && ./a.out`, has seemed to meet all of our needs. Let's take a second and 

## Code?

Let's now turn our single command line invocation into a straightforward JavaScript program that accomplishes the same task:

```javascript
const child_process = require('child_process');

function cc(sourceFile) {
  child_process.execSync(`cc ${sourceFile}`);
  return './a.out';
}

let output = task(cc('main.c'));
console.log(output);
```

Okay, now that you put it that way, that's definitely not going to pass code review. There's a bunch of issues in here, 