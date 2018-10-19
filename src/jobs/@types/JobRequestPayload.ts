import { Concurrency } from './Concurrency';
import { EnvironmentVariables } from './EnvironmentVariables';
import { ExecutorConfig } from './ExecutorConfig';
import { Processors } from './Processors';
import { Tags } from './Tags';

export type JobRequestPayload = {
  name: string;
  schedule: string;
  timezone?: string;
  shell?: boolean;
  command?: string;
  environment_variables?: EnvironmentVariables;
  owner?: string;
  owner_email?: string;
  disabled?: boolean;
  tags?: Tags;
  retries?: number;
  parent_job?: string;
  dependent_jobs?: string[];
  processors?: Processors;
  concurrency?: Concurrency;
  executor?: string;
  executor_config?: ExecutorConfig;
};
