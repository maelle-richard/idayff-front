import { NgModule } from '@angular/core';
import { UniverseTabsComponent } from './universe-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TabContentModule } from '../tab-content/tab-content.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [MatTabsModule, CommonModule, TabContentModule, HttpClientModule],
  declarations: [UniverseTabsComponent],
  exports: [UniverseTabsComponent],
})
export class UniverseTabsModule {}
