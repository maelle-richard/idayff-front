import { NgModule } from '@angular/core';
import { TabContentComponent } from './tab-content.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [MatTableModule, CommonModule, MatSlideToggleModule, HttpClientModule],
  declarations: [TabContentComponent],
  exports: [TabContentComponent],
})
export class TabContentModule {}
