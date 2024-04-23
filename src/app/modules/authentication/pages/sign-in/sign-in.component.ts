import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  email:string='';
  password:string='';
  submitted=false;
  passwordTextType!: boolean;
  ngOnInit() {

  }
  constructor() {
  }
  togglePasswordTextType(){
    this.passwordTextType= !this.passwordTextType;
  }

  onSubmit(){
    this.submitted=true;
  }

  get f(){
    return ;
  }

}
