import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeatureFlippingService } from '../../services/feature-flipping.service';
import { map, Observable } from 'rxjs';
import { FeatureFlippingResponse } from '../../types/interfaces/feature-flipping-response.interface';
import { DomainFeatureFlipping } from '../../types/interfaces/domain-feature-flipping.interface';

@Component({
  selector: 'universe-tabs',
  templateUrl: './universe-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UniverseTabsComponent implements OnInit {
  public domains: DomainFeatureFlipping[] = [];

  constructor(private readonly ffService: FeatureFlippingService) {}

  public ngOnInit() {
    this.ffService.getFF().subscribe((FFResponse: FeatureFlippingResponse) => {
      this.domains = FFResponse;
    })
  }

  public getFFDomains(): Observable<FeatureFlippingResponse> {
    return this.ffService.getFF();
  }
}
