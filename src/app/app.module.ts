import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {WidgetModule} from "./shared/widget/widget.module";
import {CarSearchModule} from "./shared/car-search/car-search.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    WidgetModule,
    CarSearchModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
