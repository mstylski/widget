import {Component, Input} from '@angular/core';
import {CarsService} from "../../services/cars-service";
import {ICar} from "./car-model"
import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent {
  @Input () placeholder: string = '';

  cars$:Observable<ICar[]> = new Observable<ICar[]>();

  searchText: FormControl = new FormControl('',
    [Validators.pattern('^[a-zA-Z0-9]+$')]
  )

  constructor(private carsService: CarsService) {
  }

  getFilteredCars() {
    this.cars$ = this.carsService.getFilteredCars(this.searchText.value);
  }

  setResetSearchText() {
    this.searchText.reset();
  }

  trackByIndex(index: number, car: ICar) {
    return index
  }
}
