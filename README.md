<div align="center">

# Lit Webapp Boilerplate

Frontend based on webcomponents boilerplate used by me, it contains the following functionality:

**Redux** / **Router** / **Docker** / **TypeScript**

</div>

## Getting started

* `index.html` should contain: global css + main lit element (`app-element`) + environment variables.
    * Inside `app-element` you are free to define and/or import more lit elements.

## Development

1. `npm run build:watch` in the first terminal. This will recompile all typescript files.
2. `npm run serve` in the second terminal. This will run build when new typescript gets compiled.

## Deployment

1. Build dockerfile

## Branches

- `main`: Main branch contains register/login and session verify logic (best as auth microservice)