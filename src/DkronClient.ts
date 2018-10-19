import { IDkronClient } from './IDkronClient';
import { IJobsApi, Job, JobRequestPayload } from './jobs';

export class DkronClient implements IDkronClient {
  constructor(private readonly jobs: IJobsApi) {}

  public createJob(job: JobRequestPayload): PromiseLike<Job> {
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

  public updateJob(job: JobRequestPayload): PromiseLike<Job> {
    return this.jobs.updateJob(job);
  }
}
