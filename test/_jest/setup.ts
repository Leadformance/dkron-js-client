import { createDkronClient } from 'src';
import { newConfig } from 'test/fixtures';

if (process.env.INTEGRATION) {
  setupIntegrationTests();
}

function setupIntegrationTests() {
  const dkronClient = createDkronClient(newConfig());

  const job1 = {
    executor: 'shell',
    executor_config: {
      command: 'echo "Hello from job_1"',
    },
    name: 'job_1',
    schedule: '0 0 1 * *',
  };

  beforeAll(() => dkronClient.createJob(job1));
}
