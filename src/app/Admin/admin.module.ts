import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookComponent } from './components/list-book/list-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';



@NgModule({
  declarations: [ListBookComponent, EditBookComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookModule  ],
  exports:[EditBookComponent,ListBookComponent]
})
export class AdminModule { }
