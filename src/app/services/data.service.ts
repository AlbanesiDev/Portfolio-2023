import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getData(): Observable<DataModel>{
    const local = `/assets/data/db.json`;
    return this.http.get<DataModel>(local);
  }
}
