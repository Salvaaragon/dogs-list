# Dog photo finder

## Description

Application developed in React to search for photos of dogs by selecting the breed previously.

Used APIs:

- [List of dog breeds](https://dog.ceo/api/breeds/list/all)
- [List of dog images](https://dog.ceo/api/breed/<raza>/images)

[Demo](https://dog-image-finder.netlify.app/)

## Aplication

## Pre-requirements

- [yarn](https://yarnpkg.com/)/[npm](https://www.npmjs.com/get-npm)

## Run app

Install yarn in your device in order to execute this application.

### First execution

Use `yarn install` or `npm install` to install all project dependencies.
Then, run `yarn start` or `npm install` to begin his execution and access in your navigator to [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Execution

If the project dependencies have not been modified, just run `yarn start` or `npm install` to start the application.

## Testing

Unit tests have been developed for some of the components located in the same directory as this one.

To execute them, just run `yarn test` or `npm test` (required previous `yarn install` or `npm install`).

In `package.json`, jest has been configured to allow the use of aliases required for tests.

```
  "jest": {
    "moduleNameMapper": {
      "^@Components(.*)$": "<rootDir>/src/components$1",
      "^@Styles(.*)$": "<rootDir>/src/styles$1",
    }
  }
```

## Folder structure

    .
    ├── public
    │   └── locales                 # Translations
    ├── src                         # App components
    │   ├── assets                  # Images, icons, fonts, ...
    │   ├── components              # Presentational components
    │   │   └── ExampleComponent
    │   │       ├── index.test.tsx  # Component tests
    │   │       ├── index.tsx       # Component definition
    │   │       ├── logic.ts        # Some logic used in this component
    │   │       ├── styles.ts       # Component styles
    │   │       └── types.ts        # Custom types used in this component
    │   ├── containers              # Views and container components
    │   ├── router                  # App router cofiguration
    │   ├── services                # External services used (like i18n, api, ...)
    │   ├── store                   # Redux store configuration
    │   │   ├── actions             # List of possible actions
    │   │   ├── constants           # Definition of action types
    │   │   ├── reducers            # Store status manager
    │   │   └── sagas               # Side effects manager
    │   ├── styles                  # Theme and styles configuration
    │   └── utils                   # Helper funtions
    ├── .babelrc                    # Babel configuration
    ├── .eslintignore
    ├── .eslintrc.js                # Eslint configuration
    ├── .gitignore
    ├── .prettierrc.js              # Prettier configuration
    ├── .rescriptsrc.js
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.paths.json         # Aliases list
    └── yarn.lock

## Aliases

Different aliases have been configured (via Babel) to simplify imports of application elements. These are located in the `.babelrc` file.

## Formatter (Eslint + Prettier)

The project has been configured to detect syntax errors using Eslint, in order to have a more maintainable code that follows the clean code standards.

In addition, this project makes use of the Prettier tool; which, connected to the IDE (in my case, Visual Studio Code), allows the automatic formatting of the code by means of the following properties:

```
  semi: true => Add ';' at the end of each element
  trailingComma: 'all' => Add ',' at the end of objects (if is possible)
  singleQuote: true => Use single quotes
  tabWidth: 2 => Two spaces indentation
```

## Precommit

This project makes use of husky and lint-staged to check that the code follows the standard defined in prettier configuration file.

## Dependencies

- [Axios](https://github.com/axios/axios): A library for execute HTTP requests from navigator
- [Babel](https://babeljs.io/): JavaScript compiler
- [Eslint](https://eslint.org/): Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [enzyme](https://enzymejs.github.io/enzyme/): Library for execute jest testing in React Apps
- [husky](https://typicode.github.io/husk): Run commands at time of committing
- [jest](https://jestjs.io/): A JavaScript testing library
- [lint-staged](https://github.com/okonet/lint-staged): Run linters on git staged files
- [Material UI](https://material-ui.com/): Frontend components library
- [Prettier](https://prettier.io/): Code formatter
- [React](https://es.reactjs.org/): A JavaScript library for building user interfaces
- [React infinite scroll loading](https://github.com/ankeetmaini/react-infinite-scroll-component): Component for display infinite scroll loading data
- [React router](https://reactrouter.com/): Routes manager
- [Redux](https://es.redux.js.org/): States container
- [Redux-saga](https://redux-saga.js.org/): Library for manage side effects
- [React-i18next](https://react.i18next.com/): Internacionalization pluging based in i18next
- [Styled components](https://styled-components.com/): Utilises tagged template literals to style your component
- [TypeScript](https://www.typescriptlang.org/)
