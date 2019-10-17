# Accomore

Some description... Seba will fill that soon :)

---

## Table od Contents

1. [Installation](#installation)
2. [Available Scripts](#available-scripts)
    1. [Starting project](#starting-project)
    2. [Linting](#linting)
    3. [Testing](#testing)
    4. [Building](#building)
3. [Deploy](#deploy)

---

## Installation

Use [npm](https://nodejs.com) for managing front-end dependencies.
In the project directory use `npm install` to install it on local machine.

You need to have .env file with declared positions:
PRODUCTION_HOST
DEVELOPMENT_HOST
LOCAL_HOST

We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as a branching model with a GitHub integration - [GitHubFlow](https://datasift.github.io/gitflow/GitFlowForGitHub.html).
Git HF [Installation guide](https://datasift.github.io/gitflow/TheHubFlowTools.html)


---

## Available Scripts

In the project directory, you can run:

### Starting project

#### `npm start`

Runs the app in the development mode.<br>
Open [localhost:8080](http://localhost:8080) to view it in the browser.
Application gets data from development API host

The page will reload if you make edits. You will also see any code errors in the console.

#### `npm run start:local`

Runs the app in the development mode.<br>
Application gets data from localhost API host, default - localhost:3000


### Linting

#### `npm run lint`

Launches code linting.

- `npm run lint:js` using [ESLint](http://eslint.org) and [airbnb](https://github.com/airbnb/javascript) JS Style Guide.
- `npm run lint:css` using [stylelint](https://stylelint.io) with [standard config](https://github.com/stylelint/stylelint-config-standard).

### Testing

#### `npm run test:unit`

Launches unit tests using [Jest](https://facebook.github.io/jest/).

- `npm run test:watch` - launches the test runner in the interactive watch mode.
- `npm run test:coverage` - generates test coverage.


### Building

#### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
Application gets data from production host API

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### `npm run build:develop`
Builds the app same like npm run build but changes API host to development

### Deploying

...Will be added soon...
