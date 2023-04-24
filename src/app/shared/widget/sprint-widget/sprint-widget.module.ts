import {NgModule} from "@angular/core";
import {SprintWidgetContentComponent} from "./sprint-widget.component";
import {SharedModule} from "../../shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    SprintWidgetContentComponent
  ],
  exports: [
    SprintWidgetContentComponent
  ],
})
export class SprintWidgetContentModule { }
