import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GenericService} from '../services/generic.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
// import { setTimeout } from 'timers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loggedIn = false;
  loading = false;
  loginRes = '';
  constructor(private formBuilder: FormBuilder,
    private genericService: GenericService,
    private router: Router) { }
  
  ngOnInit() {
    if(localStorage.getItem('isLoggedIn')){
      // this.router.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }
  get f() {
   
    return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    this.loading = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
          this.loading = false;
            return;
        }else{
          this.loading = false;
        }
        this.loginForm.value['role'] = 1;
        this.genericService.adminLogin(this.loginForm.value, 'login').subscribe(
          res=>{
            if(res[0]['status']){
              this.loginRes = 'You have successfully logged into our system.....';
              localStorage.setItem('isLoggedIn', res[0]['status']);
              localStorage.setItem('loggedInData', res[0]);
              this.loggedIn=true;
              setTimeout(()=>{
                this.router.navigate(['dashboard']);
                this.loading = false;
              },2000);
            }else{
              this.loading = false;
              this.loginRes =  res[0]['msg'];
            }
          },
          error=>{

          },
          ()=>{
            // alert(333)
            // console.log('44444444');
          }
        )

        console.log(this.loginForm.value.username)

  }
}
