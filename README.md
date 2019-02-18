## Overview



## How to use

To run at `localhost:3000` use `npm start`.

## Archtecture

Its archtecture inside `/src`is divided by:
```
src

--|components --> Main components

--|middlewares --> Middlewares that clean and converts data

--|pages --> Pages of the application

--|services --> Services that contact APIs or native functionalities of the browser

--|utils --> Usefull shortcuts to CSS and JS(this part i didn't test because is already tested in personal projects, soon i will publish at npm)
```
## Pre-staging

It is configured to each commit run the lints and make sure the pattern from airbnb is followed.

## Theming

This projects has dinamics themes that can be changed clicking at the right top buttons. This triggers different background's colors. Thank's to `styled-components` i could accomplish this easily.

Inside the file `theme.js` i have a collor pallete and a theme object, that feeds the dinamic components.

## Test coverage

To test all lints(js and sass) and unit tests: `npm run test`.
Or to run only unit tests: `npm run test:unit`

## Why i'm not using redux | data manegement

At this project i didn't see necessary the use of redux, if i needed to delivery some data at another part of the app i could just use `contextAPI`. The `provider` file that manage all the data of the page is more than enough to delivery a smooth and simple experience for both, client and coder. The advantage of this type of archtecture is to create small contexts using a single class with all other files stateless components.

## What's next?
This is a list of what i could have done with more time.

- Continuos integration using bitbucket pipelines or gitlab.
- Proptypes validation using flow + react.
- Internationalization using i18n.
- E2E tests using cypress.