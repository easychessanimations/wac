# wac

Compiler for a simple C-like language built upon WebAssembly text format ( WAT ).

## Similar already existing projects:

https://github.com/ballercat/walt

https://github.com/tmcw/wah

https://github.com/maierfelix/mini-c

# Prerequisites

## Wabt tool chain

Clone and build the wabt tool chain following the below instructions:

https://github.com/WebAssembly/wabt#cloning

Make sure that the `wat2wasm` tool is in your path.

## Node

You need the latest version of `Node.js` to be installed on your system.

## Set default Javascript engine to Node

You should associate the execution of Javascript files ( files with `.js` extension ) with `Node.js` on your system.

# Installing

```
npm install -g @easychessanimations/wac
```

# Running

Open a terminal window and at the command prompt type:

```
wac
```
