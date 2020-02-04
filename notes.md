
## steps to create a react boilerplate with express, sass and babel
    
    install :
    ` npm init -y `

## 1.1 express 
    to architect our server, handle our routes and build RESTful APIs
    
    install :
    ` npm i express --save `
    
     a folder called node_modules should automatically be created - anything we install in our project will reside in that  folder
        a) create a new folder called server - index.js
        b) add a start ( "start" : "nodemon server/index.js" ) command on package.json
        c) npm run start will start the server

## 1.2 webpack
    webpack : The bundle
    webpack-cli : Command Line Interface to be able to run webpack commands

    install :
    ` npm i webpack webpack-cli --save-dev `

    a) add a build command ( "build" : "webpack --mode production") in package.json
    b) create a folder  called src - this is where most of our project's source code will exist. create a file index.js
    c) npm run build will automatically create a dist folder 

## 2 babel
    React embraces JSX ( although js would work perfectly fine too)  Babel helps compile JSX syntax to js
    we can now use ES6 syntax and babel will compile that to ES5 form

    @babel/core : To transform ES6+ code to ES5
    @babel/preset-env : Preset to allow polyfills
    @babel/preset-react : Preset for React and JSX
    @babel-loader : Webpack helper

    install : 
    ` npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel-loader `

     a) among these 4 packages two of of them are presets - Babel core needs to know that it has these plugins 
     b) on the roo level create a .babelrc file and specify the presets as an array 

    note: to read more on : 
    if the code needs to be polyfilled, we will need these NODE packages : 
        core.js
        regenarator-runtime
    more about that here : https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md

## 3.0 babel + webpack
    on the root level create a webpack.config.js
    webpack needs to know that .js and .jsx files need to go through babel before being bundled
    REMEMBER : since webpack bundles everything and creates a simple browser-readable code, all packages, presets and plugins you install will need to be configured in webpack.

## 3.1 react
    time to install React and React-dom

    install : 
    `npm i --save react react-dom`

## 3.2 react + webpack
    similar to what we did for .js and .jsx file, we need to tell webpack what to do with the new .html file. webpack needs to bundle it to the dist folder

    `npm i --save-dev html-webpack-plugin`

    the webpack config needs to updated to handle this plugin. we also tell webpack that the now-coded src/index.js is the entry point.

## 3.3 react + express
    express does not know of the new html plugin and html file we created 
    in package.json the start script simply starts the server. we now need the webpack to bundle up our files and then start the server.

    ` "dev": "webpack --mode development && nodemon server/index.js" `

    see ./server/index.js

    



    





