import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {



  editForm: FormGroup;
  _id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private bookservice: BookService) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    this.isAddMode = !this._id;
    this.editForm = this.formBuilder.group({

      id: [''],
      name: [''],
      author: [''],
      price: [''],
      imageUrl: ['']
    });
    if (!this.isAddMode) {
      this.bookservice.getBook(this._id)
        .pipe(first())
        .subscribe(x => this.editForm.patchValue(x)
        );
    }


  }




    onSubmit() {
      this.submitted = true;

     

      // stop here if form is invalid
      if (this.editForm.invalid) {
        return;
      }

      this.loading = true;
      if (this.isAddMode) {
        this.createBook();
      } else {
        this.updateBook();
      }
    }


    private createBook() {
      this.bookservice.create(this.editForm.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                   this.loading = false;
              }
          });
  }

  private updateBook() {
    this.bookservice.update(this.editForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
               this.router.navigate(['../../'], { relativeTo: this.route });
            },
            error: error => {
                 this.loading = false;
            }
        });
}

  }