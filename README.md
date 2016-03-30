# Intro to React

There will be a lot of technology. It will be like learning LAMP in one session.
But we know you can make it :) so hang on.


- The dev tools
- React

________________________


# The dev tools

- node is the chrome "Console" JS engine, callable from the command line.
- node has its own networking library, so it doesn't require a webserver.
- NPM is the node package manager. It helps installing js or native libraries (binaries). Composer + PECL.

## 0 - Node and CommonJS


```bash
$ cd 0-node/
$ node hello-world.js
$ node demos-node-webpack/commonjs_main.js

```

## 1 - NPM

NPM can install globally...

```bash
$ cd ../1-npm/
$ npm install simple-server -g

```
... or locally (for a given project only)

```bash
$ npm init
$ npm install azer/left-pad webpack --save
```

I crafted the different "package.json" for you for the rest of the workshop.

We will use:

- webpack: a bundler. Several files => one file.
- babel-loader: babel transpiler for webpack.
- babel-preset-es2015: babel preset for es2015.
- babel-preset-react: babel preset for jsx.
- react: the components view library.
- react-dom: the dom renderer for react.
- axios: like $.ajax but with promises.
- material-ui: library of already made components.


To make our life easier, we will install a few globally too:

```bash
$ npm install webpack webpack-dev-server -g
$ npm installbabel-preset-react babel-preset-es2015 babel-loader  -g 

```

## 2 - Webpack and Babel

Webpack is a bundler.

In JS, there is 4 ways to manage dependencies: es2015, AMD, UMD and CommonJS.
Let's take a look at es2015.



```bash
$ node --v8-options | grep "in progress"
$ cd ../0-node
$ webpack commonjs-main.js bundle.js
$ cd ../2-webpack-babel
$ webpack
$ webpack -p

```


# React

Here is the specifics of React. 

```bash
cd ../3-react
npm install -g babel-preset-react babel-preset-es2015
webpack
simple-server -p 8080

ifconfig
webpack-dev-server --host 172.17.47.2

```

We need to grab the correct host
