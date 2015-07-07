# Pokedex App
A pokedex web app using AngularJS and [Pokeapi.co](http://pokeapi.co/).

This app was developed on the AngularJS Course that I gave
. So I'm sharing the code for those who are interested in studying AngularJS.

## Pre requirements
- Node.js and NPM installed (I recommend to do something like [this](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install global packages without sudo )
- Browser Sync 
```shell
npm install -g browser-sync
```

## How to run
- Install required npm packages, run this command on project folder :
```shell
npm install
```
- Start livereload server
```shell
browser-sync start --server --files="**/*.html, **/*.js"
```
or
```shell
chmod +x serve.sh
./serve.sh
```

