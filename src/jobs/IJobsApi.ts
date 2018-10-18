import { CreateJobRequest, UpdateJobRequest } from './@types';
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

  /**
   * @param jobName The name of the job to remove
   * @return The removed job
   */
  removeJob(jobName: string): PromiseLike<Job>;

  /**
   * @param job The job to update
   * @return The updated job
   */
  updateJob(job: UpdateJobRequest): PromiseLike<Job>;
}
