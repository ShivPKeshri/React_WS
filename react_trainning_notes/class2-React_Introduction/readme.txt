# React

- react is a javascript library which we use to build frontend or user interface
- it is not a framework like angular
- react is a user interface library
- react is a tool for building UI components

Component are every where


# important features of react
- JSX
- components
- one way data binding
- Virtual DOM
- simplicity
- performance

# Why we use React
- DOM is slow in its real form
- React uses virtual DOM which is significantly faster and more efficient to update
- simple and easy to learn
- reusability
- performance 
- easy for testing



# Angular vs React
React
- it is library
- one way data binding
- JSX (Javascript XML)
- does not support entirely dependency injection
- virtual DOM


Angular
- it is a framework
- two way data binding
- typescript
- support dependency injection
- incremental DOM


# Setup
- nodejs
- vscode


# npm - node package manager

> npm install <package_name>
> npm i <package_name>
> npm i <package_name>@<version>
> npm i <package_name> -g  // global

> npm i create-react-app -g
> create-react-app --version
> create-react-app <project_name>
> cd <project_name>
> code .
> npm start

http://localhost:3000

Or

> npx create-react-app <project_name>
> cd <project_name>
> code .
> npm start


# Understand folder structure

Package.json - this is an npm configuration file, it contain app meta data, some script and list of dependencies 

Package-lock.json - this is an auto generated file that get updated whenever npm does any operation on package.json

node_modules - this folder contain the dependencies source code requires for react project
          > npm install

Public - this folder contain public assets of the app
It contain index.html where react will mount app root components

.gitignore - this file used by git to ignore any file or folder while publishing source code into remote server


README.md - it provide the documentation to read

Src - source - it contain the application source code where you mostly create files

There are 3 file with a similar name but different extension
These 3 file together form your root / app component

App.css - style
App.js - main js file
App.test.js - test case


index.css - global css file

index.js - it is main entry point of the app like main method
      


# Components in React
- in react a component represent a part of user interface
- what ever is visible on the web page is a components, we can put component together to make a bigger component

# type of components
- class components - stateful 
- functional component - stateless

State = data

In react 16.4 v they introduce the concept of hook which make possible to do everything with functional component


# how to create a component


# install bootstrap

> npm i bootstrap@4.6

index.js

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';





















