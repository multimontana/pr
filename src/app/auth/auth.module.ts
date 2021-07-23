import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "src/app/auth/components/register.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/reducers";

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
    StoreModule.forFeature('authState', reducer)
  ],
  declarations: [RegisterComponent]
})
export class AuthModule {}
