import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared.module";
import {WeatherWidgetContentComponent} from "./weather-widget.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    WeatherWidgetContentComponent
  ],
  exports: [
    WeatherWidgetContentComponent
  ],
})
export class WeatherWidgetContentModule { }
