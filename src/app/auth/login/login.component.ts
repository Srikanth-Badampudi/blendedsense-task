import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userModel } from '../user';
import { AuthServiceService } from '../auth-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthServiceService,
    private messageService: MessageService,
    private router: Router
  ) {}

  submitted: boolean = false;
  isText: boolean = false;
  type: string = 'password';
  eyeIcon: string = 'pi-eye';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'pi-eye-slash') : (this.eyeIcon = 'pi-eye');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let error = null;
      this.auth.signIn(this.loginForm.value).subscribe(
        (res) => {
          this.auth.storeToken(res);
          this.submitted = false;
          this.messageService.add({
            severity: 'success',
            summary: res.message,
          });
          this.router.navigate(['/projects/']);
          this.resetForm();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: error.error.message,
          });
        }
      );
    } else {
      this.loginForm;
      this.messageService.add({
        severity: 'error',
        summary: 'Please Login first!',
      });
    }
  }

  resetForm() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
