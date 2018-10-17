import { IDkronClient } from './IDkronClient';
import { CreateJobRequest, IJobsApi, Job } from './jobs';

export class DkronClient implements IDkronClient {
  constructor(private readonly jobs: IJobsApi) {}

  public createJob(job: CreateJobRequest): PromiseLike<Job> {
    return this.jobs.createJob(job);
  }

  public getJob(jobName: string): PromiseLike<Job> {
    return this.jobs.getJob(jobName);
  }
}
