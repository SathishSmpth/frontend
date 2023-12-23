import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  loginData!: FormGroup;

  ngOnInit(): void {
    this.loginData = new FormGroup({
      emailOrPhone: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,50}$/
        ),
      ]),
    });
  }

  handleSubmit() {
    if (this.loginData.valid) {
      console.log(this.loginData.value);
    } else {
      this.loginData.markAllAsTouched();
    }
  }
}
