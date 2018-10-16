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

## LICENSE

[MIT](LICENSE)
