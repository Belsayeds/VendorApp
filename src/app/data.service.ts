import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class DataService {

  private v3 = 'https://vendor-list.consensu.org/v3/vendor-list.json'; // Path to your JSON file


  constructor(private http: HttpClient) { }

  getV3Json(): Observable<any> {
    console.log(this.http.get(this.v3));
    return this.http.get(this.v3, { responseType: 'json' });
  }

}
