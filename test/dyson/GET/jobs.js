const job = {
  path: '/v1/jobs/:jobName',
  template: {
    name: params => params.jobName,
    schedule: '0 0 1 * *',
    executor: 'shell',
    executor_config: {
      command: params => `echo "Hello from ${params.jobName}"`,
    },
    timezone: '',
    shell: false,
    command: '',
    environment_variables: null,
    owner: '',
    owner_email: '',
    success_count: 0,
    error_count: 0,
    last_success: '0001-01-01T00:00:00Z',
    last_error: '0001-01-01T00:00:00Z',
    disabled: false,
    tags: null,
    retries: 0,
    dependent_jobs: null,
    parent_job: '',
    processors: null,
    concurrency: 'allow',
    status: 'success',
  },
};

module.exports = [job];
