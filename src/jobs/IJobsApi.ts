import { CreateJobRequest } from './@types';
import { Job } from './@types';

export interface IJobsApi {
  /**
   * @param job The job to create
   * @return The created job
   */
  createJob(job: CreateJobRequest): PromiseLike<Job>;
}
