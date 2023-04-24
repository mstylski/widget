import {Component, Input} from '@angular/core';
import {CarsService} from "../../services/cars-service";
import {Car} from "./car-model"
import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent {
  @Input () placeholder: string = '';

  cars$:Observable<Car[]> = new Observable<Car[]>();

  searchText: FormControl = new FormControl('',
    [Validators.required]
  )

  constructor(private carsService: CarsService) {
  }

  getFilteredCars() {
    this.cars$ = this.carsService.getFilteredCars(this.searchText.value);
  }

  setResetSearchText() {
    this.searchText.reset();
  }

  trackByIndex(index: number, car: Car) {
    return index
  }
}
