import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import { BookModel } from '../components/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get("http://localhost:56622/api/book")
    .pipe
    (map(
      (result: BookModel[])=> result)
    );
  }
}
