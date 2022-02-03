import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import { BookModel } from '../components/models/book.model';
import { Observable } from 'rxjs';


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
  };
  getBook(id:string){
    return this.http.get("http://localhost:56622/api/book/"+id)
    .pipe
    (map(
      (result: BookModel[])=> result)
    );
    }

    create(data:BookModel): Observable<BookModel> {
      return this.http.post<BookModel>("http://localhost:56622/api/book/", data);
    }
  
    update(data: BookModel): Observable<BookModel> {
      return this.http.put<BookModel>("http://localhost:56622/api/book/"+data.id, data);
    }
    delete(id: string): Observable<BookModel> {
      return this.http.delete<BookModel>("http://localhost:56622/api/book/"+id);
    }
 // Observable (very similar to promisee) -
    // provides data in form of streams.
    // observer design pattern
    // object(observable) - product  books(from server)
    // observers (subscribers) - you/customers ()
    // publishers (who emits data); // amazon system publishes data  (getAll)
  
  
}
