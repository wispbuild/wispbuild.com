---
slug: .
title: CLI
sidebar_position: 1
---

# CLI Reference

```
wisp <query>

wisp plan
wisp analyze

wisp daemon start
wisp daemon stop
wisp daemon info
wisp daemon clean

wisp server start
wisp server stop
wisp server info
wisp server clean

wisp config --location=<system|user|local|worktree|env> --include=<all|default|configured>
wisp config path --location=<system|user|local|worktree>
wisp config get <key> --location=<system|user|local|worktree|env>
wisp config set <key> <value> --location=<system|user|local|worktree>
wisp config delete <key> --location=<system|user|local|worktree>
wisp config why <key>

wisp completion

wisp --config <path>
wisp --config `wisp config`

wisp --cwd
wisp --version
wisp --help
wisp --verbosity
```