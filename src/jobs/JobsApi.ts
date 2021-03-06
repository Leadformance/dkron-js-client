import axios from 'axios';
import { Configuration } from '../@types';
import { JobRequestPayload } from './@types';
import { IJobsApi } from './IJobsApi';

export class JobsApi implements IJobsApi {
  public static readonly ROUTE = {
    job: (config: Configuration, name: string) =>
      `${config.url}/${config.version}/jobs/${name}`,
    jobs: (config: Configuration) => `${config.url}/${config.version}/jobs`,
  };

  constructor(private readonly config: Configuration) {}

  public async createJob(body: JobRequestPayload) {
    return await axios
      .post(JobsApi.ROUTE.jobs(this.config), body)
      .then(res => res.data);
  }

  public async getJob(jobName: string) {
    return await axios
      .get(JobsApi.ROUTE.job(this.config, jobName))
      .then(res => res.data);
  }

  public async getJobs() {
    return await axios
      .get(JobsApi.ROUTE.jobs(this.config))
      .then(res => res.data);
  }

  public async removeJob(jobName: string) {
    return await axios
      .delete(JobsApi.ROUTE.job(this.config, jobName))
      .then(res => res.data);
  }

  public async updateJob(job: JobRequestPayload) {
    return await axios
      .patch(JobsApi.ROUTE.jobs(this.config), job)
      .then(res => res.data);
  }
}
