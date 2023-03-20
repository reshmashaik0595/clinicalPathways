import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
declare var $: any;
import { NgxLoaderSpinnerService } from 'ngx-loader-spinner';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private spinnerService: NgxLoaderSpinnerService,
    private router: Router,
    private userService: UserService
  ) {}

  isForgetPassword: boolean = false;
  userId: any = '';

  loginForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null),
  });

  signUpForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    emailId: new FormControl(null, [Validators.required]),
    designation: new FormControl(null, [Validators.required]),
    govtIDNumber: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });

  className: string = '';
  message: any = null;
  header: any = null;
  onComponentLoad: boolean = true;

  isLoggedIn =
    sessionStorage.getItem('isAuthenticated') == 'true' ? true : false;

  ngOnInit(): void {}

  // login
  login() {
    try {
      this.spinnerService.show();
      this.userService.login(this.loginForm.value).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = response.message;

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
          }, 1500);

          setTimeout(() => {
            $('#loginModal').modal('hide');
            this.loginForm.reset();
            this.router.navigate(['/inner-dashboard']);
          }, 1500);

          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(`Error [login]:  , ${JSON.stringify(err.error)}`);
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [login]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  goToDashboard() {
    this.router.navigate(['/inner-dashboard']);
  }

  // Signup and create a user
  saveUser() {
    this.spinnerService.show();
    try {
      this.userService.saveUser([this.signUpForm.value]).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = response.message;

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
          }, 1500);

          setTimeout(() => {
            $('#signUpModal').modal('hide');
            this.signUpForm.reset();
          }, 1500);

          this.spinnerService.hide();

          swal.fire({
            text: response.emailSent
              ? 'Email has been sent to admin for further approval. Thank You!'
              : 'Email failed to send for approval. Please contact administrator for more details.',
            icon: response.emailSent ? 'success' : 'error',
            showConfirmButton: false,
            timer: 4500,
          });
        },
        (err: any) => {
          console.error(`Error [saveUser]:  , ${JSON.stringify(err.error)}`);
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [saveUser]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  onForgetPasswordSelection() {
    this.className = '';
    this.onComponentLoad = true;
    this.header = null;
    this.message = null;
    this.loginForm.reset();
    this.isForgetPassword = true;
    this.loginForm.get('confirmPassword')?.setValidators([Validators.required]);
    this.loginForm.updateValueAndValidity();
  }

  onBackToLoginSelection() {
    this.className = '';
    this.onComponentLoad = true;
    this.header = null;
    this.message = null;
    this.loginForm.reset();
    this.isForgetPassword = false;
    this.loginForm.get('confirmPassword')?.clearValidators();
    this.loginForm.get('confirmPassword')?.updateValueAndValidity();
  }

  forgetPassword() {
    try {
      this.spinnerService.show();
      const query = `userName=${this.loginForm.get('userName')?.value}`;
      this.userService.forgetPassword(query, this.loginForm.value).subscribe(
        (response: any) => {
          this.onComponentLoad = false;
          this.className = 'alert alert-success';
          this.header = 'Success';
          this.message = 'Password reset successful';

          setTimeout(() => {
            this.className = '';
            this.onComponentLoad = true;
            this.header = null;
            this.message = null;
            this.loginForm.reset();
            this.isForgetPassword = false;
            this.loginForm.get('confirmPassword')?.clearValidators();
            this.loginForm.get('confirmPassword')?.updateValueAndValidity();
          }, 3000);

          this.spinnerService.hide();
        },
        (err: any) => {
          console.error(
            `Error [Forget-Password]:  , ${JSON.stringify(err.error)}`
          );
          this.onComponentLoad = false;
          this.className = 'alert alert-danger';
          this.header = 'Error';
          this.message = err.error.body;
          this.spinnerService.hide();
        }
      );
    } catch (err: any) {
      console.error(`Error [Forget-Password]:  , ${JSON.stringify(err)}`);
      this.onComponentLoad = false;
      this.className = 'alert alert-danger';
      this.header = 'Error';
      this.message = err.error.body;
      this.spinnerService.hide();
    }
  }

  resetModal() {
    this.isForgetPassword = false;
    this.loginForm.reset();
    this.signUpForm.reset();
  }
}
