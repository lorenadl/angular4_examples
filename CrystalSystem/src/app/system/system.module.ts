import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BulmaModule} from "../bulma/bulma.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BulmaModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SystemModule { }
