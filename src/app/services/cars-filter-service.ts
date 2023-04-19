import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {ICarFilter, ICar, ICarResponse} from "../interfaces/car-filter"
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarsFilterService {
  constructor(private http: HttpClient) {
  }
  apiKey = 'gmtHAo705ASLAvdS9WaFXQ==bjyKaLeLMXxOAuqs'
  search(filter: ICarFilter): Observable<ICar[]>{
    return this.http.get<ICarResponse[]>('https://api.api-ninjas.com/v1/cars?model=' + filter.model + '&limit=' + filter.limit,
      {
      headers: { 'X-Api-Key': this.apiKey}
    })
      .pipe(map((carResponse) => {
        return carResponse;
    }))
  }
}
