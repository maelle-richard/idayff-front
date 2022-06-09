import { Feature } from './feature.interface';

export interface BigFeature {
  id: number,
  name : string,
  features: Feature[],
}
