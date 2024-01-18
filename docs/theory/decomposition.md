---
title: Decomposition
sidebar_position: 3
---

# Decomposition

So far our example build system, `cc main.c && ./a.out`, has appeared to meet all of our needs. Let's take a moment to celebrate that something so powerful is that straightforward to accomplish before we review all of the limitations and assumptions that went into that command.

🎉

Okay. Now let's put our build system through code review.

## Issues

Let's turn our single command line invocation into a straightforward JavaScript program that accomplishes the same outputs:

```javascript title="build.js"
const child_process = require('child_process');

function cc(sourceFile) {
  child_process.execSync(`cc ${sourceFile}`);
  return './a.out';
}

let output = child_process.execSync(
  cc('main.c')
);

console.log(output.toString());
```

Once transformed to code some of the "code smells" that people talk about start to become more-apparent:
- hardcoded values, such as `a.out`
- two different patterns for child process execution

And that doesn't even account for other implicit dependencies:
- existence of `cc`
- the working directory

So that's definitely not going to pass code review. Our simple build system is just enough to get to "works on my machine!" but probably not everywhere that you need it to work. So we need to revisit this.

## Breaking it Down

If we're going to get a better outcome we're going to have to make all of the inputs (and outputs!) more-clear.