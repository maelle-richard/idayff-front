import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniverseTabsModule } from './components/universe-tabs/universe-tabs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UniverseTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
