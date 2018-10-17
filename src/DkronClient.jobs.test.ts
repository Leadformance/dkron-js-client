import { createDkronClient, CreateJobRequest, IDkronClient } from 'src';
import { newConfig } from 'test/fixtures';

describe('DkronClient - Jobs API', () => {
  let dkronClient: IDkronClient;

  beforeEach(() => {
    dkronClient = createDkronClient(newConfig());
  });

  describe('createJob', () => {
    it('creates the job', async () => {
      const body: CreateJobRequest = {
        executor: 'shell',
        executor_config: {
          command: 'echo "Hello from parent"',
        },
        name: 'my-job',
        schedule: '@every 1m',
      };

      const result = await dkronClient.createJob(body);
      expect(result).toMatchObject({
        command: '',
        concurrency: 'allow',
        dependent_jobs: null,
        disabled: false,
        environment_variables: null,
        error_count: 0,
        executor: 'shell',
        executor_config: {
          command: 'echo "Hello from parent"',
        },
        name: 'my-job',
        owner: '',
        owner_email: '',
        parent_job: '',
        processors: null,
        retries: 0,
        schedule: '@every 1m',
        shell: false,
        status: '',
        success_count: 0,
        tags: null,
        timezone: '',
      });
    });
  });

  describe('getJob', () => {
    it('return the job', async () => {
      const result = await dkronClient.getJob('job_1');
      expect(result).toMatchObject({
        command: '',
        concurrency: 'allow',
        dependent_jobs: null,
        disabled: false,
        environment_variables: null,
        error_count: 0,
        executor: 'shell',
        executor_config: {
          command: 'echo "Hello from job_1"',
        },
        name: 'job_1',
        owner: '',
        owner_email: '',
        parent_job: '',
        processors: null,
        retries: 0,
        schedule: '0 0 1 * *',
        shell: false,
        status: 'success',
        success_count: 0,
        tags: null,
        timezone: '',
      });
    });
  });
});
