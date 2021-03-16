# Dog photo finder

## Description

Application developed in React to search for photos of dogs by selecting the breed previously.

Used APIs:

- [List of dog breeds](https://dog.ceo/api/breeds/list/all)
- [List of dog images](https://dog.ceo/api/breed/<raza>/images)

## Aplication

## Pre-requirements

- [Yarn](https://yarnpkg.com/)

## Run app

Install yarn in your device in order to execute this application.

### First execution

Use `yarn install` to install all project dependencies.
Then, run `yarn start` to begin his execution and access in your navigator to [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Execution

If the project dependencies have not been modified, just run `yarn start` to start the application.

## Folder structure

    .
    ├── public
    │   └── locales                 # Translations
    ├── src                         # App components
    │   ├── assets                  # Images, icons, fonts, ...
    │   ├── components              # Presentational components
    │   │   ├── ExampleComponent
    │   │   │   ├── index.tsx       # Component definition
    │   │   │   ├── styles.ts       # Component styles
    │   │   │   ├── types.ts        # Custom types used in this component
    │   │   │   └── logic.ts        # Some logic used in this component
    │   ├── containers              # Views and container components
    │   ├── services                # External services used (like i18n, api, ...)
    │   ├── styles                  # Theme and styles configuration
    │   ├── store                   # Redux store configuration
    │   └── utils                   # Helper funtions
    ├── .babelrc                    # Babel configuration
    ├── .eslintignore
    ├── .eslintrc.js                # Eslint configuration
    ├── .gitignore
    ├── .prettierrc.js              # Prettier configuration
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.paths.json         # Aliases list
    └── yarn.lock

## Dependencies

- [Axios](https://github.com/axios/axios): A library for execute HTTP requests from navigator
- [Babel](https://babeljs.io/): JavaScript compiler
- [Material UI](https://material-ui.com/): Frontend components library
- [React](https://es.reactjs.org/): A JavaScript library for building user interfaces
- [React router](https://reactrouter.com/): Routes manager
- [Redux](https://es.redux.js.org/): States container
- [Redux-saga](https://redux-saga.js.org/): Library for manage side effects
- [React-i18next](https://react.i18next.com/): Internacionalization pluging based in i18next
- [Styled components](https://styled-components.com/): Utilises tagged template literals to style your component
- [TypeScript](https://www.typescriptlang.org/)
