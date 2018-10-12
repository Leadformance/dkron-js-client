import axios from 'axios';
import { Configuration } from '../@types';
import { CreateJobRequest, Job } from './@types';
import { IJobsApi } from './IJobsApi';

export class JobsApi implements IJobsApi {
  public static readonly ROUTE = {
    jobs: (config: Configuration) => `${config.url}/${config.version}/jobs`,
  };

  constructor(private readonly config: Configuration) {}

  public createJob(body: CreateJobRequest): PromiseLike<Job> {
    return axios
      .post(JobsApi.ROUTE.jobs(this.config), body)
      .then(res => res.data);
  }
}
