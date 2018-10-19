# dkron-js-client

[![Build Status](https://travis-ci.org/Leadformance/dkron-js-client.svg?branch=master)](https://travis-ci.org/Leadformance/dkron-js-client)
[![codecov](https://codecov.io/gh/Leadformance/dkron-js-client/branch/master/graph/badge.svg)](https://codecov.io/gh/Leadformance/dkron-js-client)

> [DKron](https://dkron.io) REST API client for JavaScript

## Usage

### Node

Install with `yarn add dkron-js-client` or `npm install --save dkron-js-client`

```js
const { createDkronClient } = require('dkron-js-client');

const config = { url: 'http://localhost:8080', version: 'v1' };
const dkronClient = createDkronClient(config);

dkronClient
  .createJob({ name: 'my-job', schedule: '* * * * *' })
  .then(createdJob => {
    // play with created job
  });
```

## Release

The publishing is automated using Travis. However it is triggered on building a
tag. Therefore you need to create a tag to be able to publish a new version in
the npm registry.

To create a tag, run the following command

```bash
npm version -m 'release: v%s' patch|minor|major
```

Push all of our changes to Github:

```bash
git push origin master
```

This will start a build on Travis CI, but it will not publish.

To publish the package we have to push the git tag:

```bash
git push --tags
```

## LICENSE

[MIT](LICENSE)
