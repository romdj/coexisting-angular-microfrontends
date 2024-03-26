# Coexisting Angular Microfrontends

[![Microfrontend Build](https://github.com/romdj/coexisting-angular-microfrontends/actions/workflows/build.yaml/badge.svg)](https://github.com/romdj/coexisting-angular-microfrontends/actions/workflows/build.yaml)

## Overview

This repository serves as a comprehensive example for building a micro frontend architecture using Angular. Leveraging the power of [single-spa](https://single-spa.js.org), it demonstrates how multiple Angular applications can coexist within a single page application. This approach is not limited to Angular; it allows for the inclusion of other frameworks like React or Vue, making it a versatile choice for complex projects.

The project utilizes [single-spa-layout](https://single-spa.github.io/single-spa.js.org/docs/layout-overview/) for routing and application mapping, facilitating a structured and maintainable approach to micro frontend composition.

### Useful demo and links

Visit the demo at http://coexisting-angular-microfrontends.surge.sh

### Important Note

While this repository houses multiple projects for demonstration purposes, it's recommended in real-world scenarios to maintain **one git repository per Angular application**. Similarly, the `root-html-file` project should reside in its own repository. This separation allows for decentralized development and management, enabling teams to work independently on different segments of the frontend.

## Local Development

### Running a Single Application

For an optimal development experience, it's advised to work on one single-spa application at a time. This approach requires running `ng serve` for the application you're developing, while relying on deployed versions of other applications. This setup minimizes the overhead of managing multiple services simultaneously.

To start developing with a single application:

```sh
cd app1
npm install --legacy-peer-deps
npm start
```

### Running All Applications Locally
Though focusing on a single app is preferred, you can run all applications locally if necessary:

```sh
# First terminal tab for the root config
cd root-html-file
npm install --legacy-peer-deps
npm start
```
```sh
# Additional terminal tabs for each app
cd app1
npm install --legacy-peer-deps
npm start
```

```sh
# Additional terminal tabs for each app
cd app2
npm install --legacy-peer-deps
npm start
```

```sh
# Additional terminal tabs for each app
cd architecture-application
npm install --legacy-peer-deps
npm start
```

```sh
# Additional terminal tabs for each app
cd bootstrapping-application
npm install --legacy-peer-deps
npm start
```

```sh
# Additional terminal tabs for each app
cd getting-started-application
npm install --legacy-peer-deps
npm start
```

Repeat the steps for any remaining application (each in its own terminal tab) here is the list covered so far:
- app1 (http://localhost:4221)
- app2 (http://localhost:4222)
- architecture-application (http://localhost:4210)
- bootstrapping-application (http://localhost:4211)
- getting-started-application (http://localhost:4212)

Finally, you can conclude by operating the same in navbar (http://localhost:4300).

```sh
# Additional terminal tabs for each app
cd navbar
npm install --legacy-peer-deps
npm start
```

Now that all applications are running, navigate to [http://localhost:4200](http://localhost:4200) to view the combined application. Adjustments to port numbers can be made in the root-html-file/index.html's Import Map for custom configurations.

## Deployment and Overrides
For production, it's crucial to set up your deployment to allow individual micro frontends to be updated without redeploying the entire application. Utilizing import-map-overrides, you can modify the Import Map in a live environment to test changes to a single micro frontend. This feature is already integrated into the root-html-file/index.html, enabling immediate use.

## Additional Documentation
To dive deeper into integrating Angular applications with single-spa, visit [single-spa-angular](https://github.com/single-spa/single-spa-angular).
