import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { DomainFeatureFlipping } from '../../types/interfaces/domain-feature-flipping.interface';
import { BigFeature } from '../../types/interfaces/big-feature.interface';
import { Feature } from '../../types/interfaces/feature.interface';
import { EnvironmentEnum, environmentStringToId } from '../../types/enums/environment.enum';
import { FeatureFlippingService } from '../../services/feature-flipping.service';
import { FFStatusEnum } from '../../types/enums/ff-status.enum';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tab-content.css']
})
export class TabContentComponent {
  @Input() public domain: DomainFeatureFlipping = {} as DomainFeatureFlipping;
  public displayedColumns = ['name', 'dev', 'stg1', 'stg2', 'prod'];

  constructor(private readonly ffService: FeatureFlippingService) {}

  public getDataFromBigFeature(bigFeature: BigFeature): any[] {
    return bigFeature.features.map((feature: Feature) => { return {
      name: feature.name,
      id: feature.id,
      dev: feature.environments.find((env) => env.environment_id === EnvironmentEnum.DEV)?.status_id || 0,
      stg1: feature.environments.find((env) => env.environment_id === EnvironmentEnum.STG1)?.status_id || 0,
      stg2: feature.environments.find((env) => env.environment_id === EnvironmentEnum.STG2)?.status_id || 0,
      prod: feature.environments.find((env) => env.environment_id === EnvironmentEnum.PROD)?.status_id || 0,
    }});
  }

  public updateFF(event: any, bigFeature: BigFeature, feature: any, env: string) {
    const status = feature[env];
    if (status !== 0) {
      alert('désactivation du ff')
      this.ffService.updateFF(feature.id, environmentStringToId.get(env) as EnvironmentEnum, 0);
    } else {
      this.ffService.updateFF(feature.id, environmentStringToId.get(env) as EnvironmentEnum, 1);
      alert('activation du ff')
    }
  }

  public getClassFromStatus(status: number) {
    const statusToClass: Map<FFStatusEnum, string> = new Map([
      [FFStatusEnum.OFF, 'danger'],
      [FFStatusEnum.CONDITIONAL, 'warning'],
      [FFStatusEnum.ON, 'success'],
    ]);

    return statusToClass.get(status) || '';
  }
}
