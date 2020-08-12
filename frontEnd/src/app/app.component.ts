import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'OFSA Filters Playground';
  genders: string[] = ['male', 'female', 'not sure'];
  signupForm: FormGroup;

  onSubmit() {
    console.log(this.signupForm);
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null),
      gender: new FormControl('female'),
    });
  }
}
