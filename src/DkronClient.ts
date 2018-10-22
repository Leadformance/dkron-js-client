import { IDkronClient } from './IDkronClient';
import { IJobsApi, JobRequestPayload } from './jobs';

export class DkronClient implements IDkronClient {
  constructor(private readonly jobs: IJobsApi) {}

  public async createJob(job: JobRequestPayload) {
    return await this.jobs.createJob(job);
  }

  public async getJob(jobName: string) {
    return await this.jobs.getJob(jobName);
  }

  public async getJobs() {
    return await this.jobs.getJobs();
  }

  public async removeJob(jobName: string) {
    return await this.jobs.removeJob(jobName);
  }

  public async updateJob(job: JobRequestPayload) {
    return await this.jobs.updateJob(job);
  }
}
