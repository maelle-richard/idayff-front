import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeatureFlippingResponse } from '../types/interfaces/feature-flipping-response.interface';
import { EnvironmentEnum } from '../types/enums/environment.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlippingService {
  public ffSubject: BehaviorSubject<FeatureFlippingResponse> = new BehaviorSubject([] as FeatureFlippingResponse);
  constructor(private http: HttpClient) {
    this.retrieveFF();
  }

  public retrieveFF(): void {
    this.http.get<FeatureFlippingResponse>('').subscribe((response: FeatureFlippingResponse) => {
      this.ffSubject.next(response);
    }, (error) => {
      console.log('error :', error);
      this.getFFMocked();
    });
  }

  public getFF(): Observable<FeatureFlippingResponse> {
    return this.ffSubject.asObservable();
  };

  public getFFMocked(): Observable<FeatureFlippingResponse> {
    const myResponse = [{
      domain: "sports",
      domain_id: 123,
      big_features: [{
        id: 3,
        name: "BetBuilder",
        features: [{
          name: "BetBuilderEnabledBack",
          id: 45,
          desc: "Enables bet builder feature on back side",
          environments: [{
            environment_id: 1,
            status_id: 1,
            conditions: [
              {
                id: 67,
                type: "user",
                parent_condition_id: 0,
                values_ids: [{id: 678}],
                values_labels: [],
              },
              {
                id: 688,
                type: "label",
                parent_condition_id: 67,
                values_ids: [],
                values_labels: [{label: "Prematch"}],
              },
            ],
          }],
        }],
      }]
    },
    {
      domain: "poker",
      domain_id: 122,
      big_features: [],
    },
    {
      domain: "casino",
      domain_id: 122,
      big_features: [],
    },
    {
      domain: "turf",
      domain_id: 122,
      big_features: [],
    }];

    this.ffSubject.next(myResponse);
    return this.ffSubject.asObservable();
  }

  public updateFF(featureFlipId: number, env: EnvironmentEnum, status: number): void {
    this.http.post<any>('', {featureFlipId, env, status}).subscribe(() => this.retrieveFF());
  }
}
