import {SharedModule} from "../shared.module";
import {NgModule} from "@angular/core";
import {CarSearchComponent} from "./car-search.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [SharedModule, ReactiveFormsModule],
  declarations: [
    CarSearchComponent
  ],
  exports: [
    CarSearchComponent
  ],
})
export class CarSearchModule { }
