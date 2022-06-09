import { EnvironmentEnum } from '../enums/environment.enum';
import { FFStatusEnum } from '../enums/ff-status.enum';
import { FFConditions } from './ff-conditions.interface';

export interface EnvironmentConfiguration {
  environment_id : EnvironmentEnum,
  status_id: FFStatusEnum,
  conditions: FFConditions[],
}
