import { EnvironmentConfiguration } from './environment-configuration.interface';

export interface Feature {
  name: string,
  id: number,
  desc: string,
  environments: EnvironmentConfiguration[]
}
