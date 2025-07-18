# SsoApp

This project integrates **OAuth 2.0 Authorization Code Flow with PKCE** using [`angular-oauth2-oidc`](https://github.com/manfredsteyer/angular-oauth2-oidc) for secure Single Sign-On (SSO) capabilities. Built with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10, the app is designed for modern identity providers like **Azure AD**, **Auth0**, or **Keycloak**.

## Development server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload when changes to source files are saved.

## Code scaffolding

To generate a new component, use:

```bash
ng generate component component-name
```

For a full list of schematics:

```bash
ng generate --help
```

## Building

To build the project:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory. The production build uses Angular’s optimization features for performance.

## Running unit tests

To execute unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Running end-to-end tests

For e2e testing:

```bash
ng e2e
```

Angular CLI doesn’t include an e2e framework by default. You may integrate one like Cypress or Playwright.

## Authentication Features

- 🔐 Secure login/logout using OAuth2
- 🔍 JWKS-based token validation
- 📄 Auto-login from discovery document
- 🛡️ Route protection with token checks
- 🔄 Configured with Angular's `bootstrapApplication` and standalone providers

## Additional Resources

- [angular-oauth2-oidc Documentation](https://github.com/manfredsteyer/angular-oauth2-oidc)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
