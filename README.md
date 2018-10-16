# dkron-js-client

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
