import {WidgetComponent} from "./widget.component";
import {SharedModule} from "../shared.module";
import {NgModule} from "@angular/core";
import {WeatherWidgetContentModule} from "./weather-widget/weather-widget.module";
import {SprintWidgetContentModule} from "./sprint-widget/sprint-widget.module";

@NgModule({
  imports: [SharedModule, WeatherWidgetContentModule, SprintWidgetContentModule],
  declarations: [
    WidgetComponent
  ],
  exports: [
    WidgetComponent
  ],
})
export class WidgetModule { }
