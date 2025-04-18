import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  model: any = {
    hobbies: {
      reading: false,
      gaming: false,
      sports: false
    }
  };
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (this.model.password !== this.model.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    if (form.valid && this.isHobbySelected()) {
      alert('Form Submitted:' + JSON.stringify(this.model));
    } else {
      alert('Form validation failed:' + form.errors + JSON.stringify(this.model));
    }
  }
  isHobbySelected(): boolean {
    return Object.values(this.model.hobbies).some((value) => value === true);
  }
}
