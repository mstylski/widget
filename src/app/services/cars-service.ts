import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {ICar} from "../shared/car-search/car-model"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  constructor(private http: HttpClient) {
  }
  apiKey = 'gmtHAo705ASLAvdS9WaFXQ==bjyKaLeLMXxOAuqs'
  getFilteredCars(model: string): Observable<ICar[]>{
    return this.http.get<ICar[]>('https://api.api-ninjas.com/v1/cars',
      {
      headers: { 'X-Api-Key': this.apiKey}, params: {model:model, limit: 5}
    })
  }
}
