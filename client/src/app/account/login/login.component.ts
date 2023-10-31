import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private accountService: AccountService) {
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => console.log('user logged in'),
      error: error => console.log(error)
    })
  }

}
