import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/components/models/book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: BookModel[];
  constructor() {
    this.books=[];
   }

   ngOnInit(): void {
    let dotnetbook = new BookModel(1, ".Net Core", "Packt", 1000, "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg");
    this.books.push(dotnetbook);
    let ngBook = new BookModel(2, "Angular", "Packt", 800, "https://m.media-amazon.com/images/I/41Y0hnvzrYL.jpg");
    this.books.push(ngBook);
    let efbook = new BookModel(3, "Entity Framework Core", "Packt", 1000, "https://images.manning.com/book/e/f5d1d0b-63aa-4ae0-99d9-03e7a7c3b567/Smith-EFC-2ed-HI.png");
    this.books.push(efbook);
    let sqlbook = new BookModel(4, "Sql Server", "Packt", 1500, "https://images-na.ssl-images-amazon.com/images/I/51B+Kx35CaL._SX379_BO1,204,203,200_.jpg");
    this.books.push(sqlbook);
    let testBook = new BookModel(5, "Test Book", "Packt", 0, "https://images-na.ssl-images-amazon.com/images/I/51B+Kx35CaL._SX379_BO1,204,203,200_.jpg");
    this.books.push(testBook);

  }

}
