import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WidgetComponent} from "./shared/widget/widget.component";
import {CarSearchComponent} from "./shared/car-search/car-search.component";

const routes: Routes = [
  { path: 'widget',
    component: WidgetComponent
  },
  {
    path: 'car-search',
    component: CarSearchComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
