import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'consea-webapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  displaySpinner: boolean;
  IsInvalidUserMessage: boolean;

  constructor
  (
      private router: Router,
      private fb : FormBuilder,
      private authService: AuthService
  ) 
  { }

  ngOnInit() 
  {
    this.initForm();
    this.submitted = false;
    this.displaySpinner = false;
    this.IsInvalidUserMessage = false;
  }

  initForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      number: [''],
      password: [null , [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (!this.loginForm.invalid){
      this.displaySpinner = true;
      let isUser: boolean = false;
      isUser = this.authService.isAuthenticate(this.loginForm.value.name, this.loginForm.value.password);
      
      if(isUser){
        setTimeout(() => {
          this.displaySpinner = false;
          this.router.navigate(['/home/welcome']);
        }, 2000);
      }
      else
      {
        setTimeout(() => {
          this.IsInvalidUserMessage = true;
          this.displaySpinner = false;
        }, 2000);
      }
    }
  }
}
