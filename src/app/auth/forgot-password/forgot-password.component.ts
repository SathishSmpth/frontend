import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword!: FormGroup;
  ngOnInit(): void {
    this.forgotPassword = new FormGroup({
      emailOrPhone: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit() {
    if (this.forgotPassword.valid) {
      console.log(this.forgotPassword.value);
    } else {
      this.forgotPassword.markAllAsTouched();
    }
  }
}
