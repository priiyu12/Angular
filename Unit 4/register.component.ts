import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  fnamePattern = "^[a-zA-Z ]{3,15}$";
  mobnumPattern = "^[0-9]{10}$";
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', [Validators.required,Validators.pattern(this.fnamePattern)]],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      mobileNum: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      email: ['', [Validators.required, Validators.email]],
      hobbies: this.formBuilder.group({
        reading: [false],
        gaming: [false],
        sports: [false]
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },
    { 
      validator: this.matchPassword 
    });
  }
  matchPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  get hobbiesGroup() {
    return (this.registerForm.get('hobbies') as FormGroup).controls;
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    alert('SUCCESS!! 🎉\n\n' + JSON.stringify(this.registerForm.value));
  }

  isHobbySelected(): boolean {
    const hobbies = this.registerForm.get('hobbies')?.value;
    return hobbies.reading || hobbies.gaming || hobbies.sports;
  }

  ngOnInit(): void {
  }

}
