import { Configuration } from './@types';
import { DkronClient } from './DkronClient';
import { IDkronClient } from './IDkronClient';
import { JobsApi } from './jobs';

export function createDkronClient(config: Configuration): IDkronClient {
  const jobsApi = new JobsApi(config);
  return new DkronClient(jobsApi);
}
