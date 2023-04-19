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
import { CarSearchComponent } from './car-search/car-search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent, WeatherWidgetContentComponent, SprintWidgetContentComponent, CarSearchComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
