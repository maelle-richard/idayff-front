import { BigFeature } from './big-feature.interface';

export interface DomainFeatureFlipping {
  domain: string,
  domain_id: number,
  big_features: BigFeature[],
}
