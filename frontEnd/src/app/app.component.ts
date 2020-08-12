import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'OFSA Filters Playground';
  genders: string[] = ['male', 'female', 'not sure'];
  signupForm: FormGroup;
  forbiddenNames: string[] = ['Koko', 'Poko', 'Moko'];

  onSubmit() {
    console.log(this.signupForm);
    //this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // subscribe to valueChanges and statusChanges
  ngAfterViewInit() {
    this.signupForm.valueChanges.subscribe((value) => {
      //console.log(value);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.asyncEmailValidator
        ),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }

  // my custom validator
  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.includes(control.value)) {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }

  // my custom async validator
  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'invalid@invalid.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}

/* this.signupForm.setValue({
  ... set ENTIRE form value to something else
}); */

/* this.signupForm.patchValue({
  ... only change a certain value, not whole form
}) */

/* this.signupForm.reset() */
