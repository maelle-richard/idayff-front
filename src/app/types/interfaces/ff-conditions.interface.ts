import { ValuesIds } from './values-ids.interface';
import { ValuesLabels } from './values-labels.interface';

export interface FFConditions {
  id: number,
  type : string,
  parent_condition_id?: number,
  values_ids?: ValuesIds[],
  values_labels? : ValuesLabels[],
}
