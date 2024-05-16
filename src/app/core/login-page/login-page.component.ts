import { Component } from '@angular/core';
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzRadioComponent, NzRadioGroupComponent} from "ng-zorro-antd/radio";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NzFlexDirective,
    NzRadioGroupComponent,
    FormsModule,
    NzRadioComponent,
    ReactiveFormsModule,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    NzColDirective,
    NzButtonComponent,
    NzFormDirective,
    NzCheckboxComponent,
    NzRowDirective,
    NzInputDirective,
    NzTypographyComponent,
    NzDividerComponent,
    NzIconDirective
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  passwordVisible=false;

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  constructor(private router:Router,private fb: NonNullableFormBuilder, private userService:AuthenticateService) {}

  submitForm(): void {
    if (!this.validateForm.valid) {
      this.markFormGroupAsDirty(this.validateForm);
      return;
    }

    const { email, password } = this.validateForm.value;

    const isAuthenticated = this.userService.authenticate(email, password);

    if(isAuthenticated){
      this.router.navigate(['dashboard'])
    }else{
      alert("Credenciales incorrectas")
    }

  }

  private markFormGroupAsDirty(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }




}
