import { Configuration } from 'src/@types';

export function newConfig(): Configuration {
  return {
    url: process.env.DKRON_URL
      ? process.env.DKRON_URL
      : 'http://localhost:8888',
    version: 'v1',
  };
}
