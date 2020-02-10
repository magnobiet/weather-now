# Weather Now

[![Code with hearth by Magno](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-Magno-005c9a.svg)](https://github.com/magnobiet)
[![Made with Angular](https://img.shields.io/badge/Made%20with-Angular-dd0031.svg)](https://angular.io/)
[![MIT Licence](https://img.shields.io/badge/licence-MIT-blue.svg)](https://magno.mit-license.org/2020)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)

![Preview](preview.png)

## TL;DR

### Development

```bash
# clone this repository and then run
npm install
npm start
```

#### Documentation

##### Storybook

```bash
npm run storybook:start
```

#### Test

```bash
npm run test # just smoke tests for now
```

#### Analyses

##### Bundle size

```bash
npm run bundle-analyzer
```

##### Code Quality

```bash
# start a SonarQube Server (requires Docker)
npm run sonar:start

# when SonarQube Server is up, in another terminal instance/tab run
npm run sonar:scanner
# and then, navigate to http://localhost:9000 and use `admin` as username and password to see the report
```

### Build

```bash
npm run build:prod
npm run start:dist # run a simple HTTP server to preview the application build
```
