import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email:string;
  password:string;
  ngOnInit(): void {
  }
handleLoginClick()
{
this.authService.login(this.email,this.password).subscribe(
  (values)=>{console.log(values);
  },
  (err)=>{}
  
)
}
updateEmail(event){
  console.log(event.target.value);
  this.email = event.target.value;
}
}
