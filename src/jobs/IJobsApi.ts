import { CreateJobRequest } from './@types';
import { Job } from './@types';

export interface IJobsApi {
  /**
   * @param job The job to create
   * @return The created job
   */
  createJob(job: CreateJobRequest): PromiseLike<Job>;

  /**
   * @param jobName The name of the job
   * @return The job
   */
  getJob(jobName: string): PromiseLike<Job>;

  /**
   * @return All jobs
   */
  getJobs(): PromiseLike<Job[]>;
}
