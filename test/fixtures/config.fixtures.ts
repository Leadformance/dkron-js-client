import { Configuration } from 'src/@types';

export function newConfig(): Configuration {
  return {
    url: 'http://localhost:8888',
    version: 'v1',
  };
}
