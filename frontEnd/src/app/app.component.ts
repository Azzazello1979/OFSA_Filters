import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'OFSA Filters Playground';
  genders: string[] = ['male', 'female', 'not sure'];
  signupForm: FormGroup;
  forbiddenNames: string[] = ['Koko', 'Poko', 'Moko'];

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
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
}
