# AngularAntTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

Key features/specs include:
- [Ant Design](https://ant.design/) package for global styles/components
- Basic page structure for a dashboard-type of application
- An `EventService` which allows for asynchronous communication accross different services/components
- A `HelloWorldService` which communicates with an external API
- Server-side Rendering
- Tests for all of the above that follow best practices, and can be easily followed for future development

## Development

For local development, a mock API is used at [Mockaroo](https://mockaroo.com/). The development server proxies all `/api/*` requests to the Mockaroo endpoint. In order to successfully access that endpoint, you must set the `API_KEY` environment variable, which the proxy injects in the header of the outgoing request. You can set this environment variable on your OS - or alternatively create an `.env` file and add the value there (see `.env.sample`).

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Production (SSR)

Run `npm run build:ssr && npm run serve:ssr` - this compiles the application and spins up a Node Express server to serve the application on `http://localhost:4000`.

> Note: `API_URL` must be set when running the server in order to successfully proxy API requests to the API.
