import axios from 'axios';
import { Configuration } from '../@types';
import { CreateJobRequest, Job } from './@types';
import { IJobsApi } from './IJobsApi';

export class JobsApi implements IJobsApi {
  public static readonly ROUTE = {
    job: (config: Configuration, name: string) =>
      `${config.url}/${config.version}/jobs/${name}`,
    jobs: (config: Configuration) => `${config.url}/${config.version}/jobs`,
  };

  constructor(private readonly config: Configuration) {}

  public createJob(body: CreateJobRequest): PromiseLike<Job> {
    return axios
      .post(JobsApi.ROUTE.jobs(this.config), body)
      .then(res => res.data);
  }

  public getJob(jobName: string): PromiseLike<Job> {
    return axios
      .get(JobsApi.ROUTE.job(this.config, jobName))
      .then(res => res.data);
  }

  public getJobs(): PromiseLike<Job[]> {
    return axios.get(JobsApi.ROUTE.jobs(this.config)).then(res => res.data);
  }

  public removeJob(jobName: string): PromiseLike<Job> {
    return axios
      .delete(JobsApi.ROUTE.job(this.config, jobName))
      .then(res => res.data);
  }
}
