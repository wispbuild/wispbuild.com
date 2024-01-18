---
title: Zero-to-One
sidebar_position: 1
---

# Zero-to-One

You're a soon-to-be an intrepid programmer writing your first application ever. You don't know anything about software development or build systems. But that's never stopped you from learning. You type in the first code listing from the book you're reading, "The C Programming Language", by Brian Kernighan and Dennis Ritchie:

```c title="main.c"
#include <stdio.h>

main()
{
    printf("hello, world\n");
}
```

After typing in the code, the book says you need to compile it, and then run it. The first time you do this you carefully follow the instructions in the book.

You compile the file and generate an executable:
```sh
cc main.c
```

And then you run the executable:
```sh
./a.out
```

The now-familiar string, `hello, world`, greets you. But then you look ahead and see that there are two more code listings that modify the same file, and then two exercises as well. Typing that a bunch of times is going to get tedious. So you ask your friend how shorten the command and they tell you about `&&`. The next time you type the following into your terminal:

```sh
cc main.c && ./a.out
```

And, just like that, you've written your very first build system.