import { JobRequestPayload } from './@types';
import { Job } from './@types';

export interface IJobsApi {
  /**
   * @param job The job to create
   * @return The created job
   */
  createJob(job: JobRequestPayload): Promise<Job>;

  /**
   * @param jobName The name of the job
   * @return The job
   */
  getJob(jobName: string): Promise<Job>;

  /**
   * @return All jobs
   */
  getJobs(): Promise<Job[]>;

  /**
   * @param jobName The name of the job to remove
   * @return The removed job
   */
  removeJob(jobName: string): Promise<Job>;

  /**
   * @param job The job to update
   * @return The updated job
   */
  updateJob(job: JobRequestPayload): Promise<Job>;
}
