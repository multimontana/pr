import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../store/actions/register.action";
import {Observable} from "rxjs";

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public isSubmitting$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  initialForm(): void {
      this.form = this.fb.group({
        username: ['', Validators.required],
        email: '',
        password: ''
      });
  }

  register(): void {
    this.store.dispatch(registerAction(this.form.value));
  }

  ngOnInit(): void {
    this.initialForm();
  }
}
