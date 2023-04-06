import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { WidgetComponent } from './widget/widget.component';
import {WeatherWidgetContentComponent} from "./widget/weather-widget/weather-widget.component";
import {SprintWidgetContentComponent} from "./widget/sprint-widget/sprint-widget.component";

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent, WeatherWidgetContentComponent, SprintWidgetContentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
