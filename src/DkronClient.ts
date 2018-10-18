import { IDkronClient } from './IDkronClient';
import { CreateJobRequest, IJobsApi, Job, UpdateJobRequest } from './jobs';

export class DkronClient implements IDkronClient {
  constructor(private readonly jobs: IJobsApi) {}

  public createJob(job: CreateJobRequest): PromiseLike<Job> {
    return this.jobs.createJob(job);
  }

  public getJob(jobName: string): PromiseLike<Job> {
    return this.jobs.getJob(jobName);
  }

  public getJobs(): PromiseLike<Job[]> {
    return this.jobs.getJobs();
  }

  public removeJob(jobName: string): PromiseLike<Job> {
    return this.jobs.removeJob(jobName);
  }

  public updateJob(job: UpdateJobRequest): PromiseLike<Job> {
    return this.jobs.updateJob(job);
  }
}
