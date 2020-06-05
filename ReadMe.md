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

You should associate the execution of Javascript files ( files with `.js` extension ) with `Node.js` on your system. You have to make sure that when Node.js is invoked for a file with `.js` extension, command line arguments are properly passed to the script. To find out exactly how to do this on your system, you have to make your own research.

If this does not work, you can fall back to cloning the repository and running the `wac` script manually using Node.js as explained in "Installation via git".

## Git

Only needed if you want to clone the repository and run the `wac` script manually. See also "Installation via git".

# Installing

## Npm global install

```
npm install -g @easychessanimations/wac
```

## Installation via git

```
git clone https://github.com/easychessanimations/wac.git
```

To run `wac` from the git installation use:

```
cd wac
node lib/wac.js
```

Every subsequent usage example assumes npm global installation, so if you have a git installation first cd into the cloned project directory and instead of the `wac` command use the `node lib/wac.js` command. All arguments to the command remain the same.

# Compiling the example

Open a terminal window and at the command prompt type:

```
wac example/simple.wat -o example/simple.wasm
```

# Verifying the example

Open a terminal window and at the command prompt type:

```
wac example/simple.wat -v
```
