import {Component, Input, OnInit} from '@angular/core';
import {CarsFilterService} from "../services/cars-filter-service";
import {ICar} from "../interfaces/car-filter"
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit{
  @Input () placeholder: string = '';

  carListResult : ICar[] = [];

  searchModel = {
    searchText: ''
  }

  searchForm:  FormGroup;

  constructor(private carsFilterService: CarsFilterService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(this.searchModel.searchText, [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }


  search() {
    this.carsFilterService.search({model : this.searchModel.searchText, limit: 5})
      .subscribe((cars: ICar[]) => {
      this.carListResult = cars;
    });
  }

  ngOnInit(): void {}

  get searchText() { return this.searchForm.get('searchText'); }
}
