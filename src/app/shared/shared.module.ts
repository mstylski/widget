import {NgModule} from "@angular/core";
import {CarSearchComponent} from "./car-search/car-search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {WidgetComponent} from "./widget/widget.component";
import {WeatherWidgetContentComponent} from "./widget/weather-widget/weather-widget.component";
import {SprintWidgetContentComponent} from "./widget/sprint-widget/sprint-widget.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    AsyncPipe,
    NgClass
  ],
  declarations: [
    CarSearchComponent,
    WidgetComponent,
    WeatherWidgetContentComponent,
    SprintWidgetContentComponent
  ],
  exports: [
    CarSearchComponent,
    WidgetComponent,
    WeatherWidgetContentComponent,
    SprintWidgetContentComponent
  ],
})
export class SharedModule { }
