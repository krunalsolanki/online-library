import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { EditBookComponent } from './Admin/components/edit-book/edit-book.component';
import { ListBookComponent } from './Admin/components/list-book/list-book.component';
import { AdminModule } from './Admin/admin.module';
import {  HttpClientModule } from '@angular/common/http';
import { BookService } from './book/services/book.service';
import { FormBuilder } from '@angular/forms';

const routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: SignupComponent},
  {path:'editbook/:id', component: EditBookComponent},
  {path:'editbook', component: EditBookComponent},
  {path:'listbook', component: ListBookComponent}
];

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    AdminModule,
    RouterModule.forRoot(routes)
    
   ],
   exports:[RouterModule],
  // Provide services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
