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

  const job2 = {
    executor: 'shell',
    executor_config: {},
    name: 'job_2',
    schedule: '0 0 2 * *',
  };

  const outdatedJob = {
    executor: 'shell',
    executor_config: {
      command: 'echo "Hello from outdated-job"',
    },
    name: 'outdated-job',
    schedule: '0 0 1 * *',
  };

  const updatedJob = {
    executor: 'shell',
    executor_config: {
      command: 'echo "Hello from updated-job"',
    },
    name: 'updated-job',
    schedule: '0 0 1 * *',
  };

  beforeAll(() =>
    Promise.all([
      dkronClient.createJob(job1),
      dkronClient.createJob(job2),
      dkronClient.createJob(outdatedJob),
      dkronClient.createJob(updatedJob),
    ]));
}
