import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from 'src/app/auth/components/register.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/redusers";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer)
  ],
  declarations: [RegisterComponent]
})
export class AuthModule {}
