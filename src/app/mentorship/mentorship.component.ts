import { Component, OnInit } from '@angular/core';
import {FormControl, NgModel, UntypedFormGroup, Validator, UntypedFormBuilder, Form, Validators, NgForm} from '@angular/forms'
import { IMentorship } from '../mentorship';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.css']
})
export class MentorshipComponent implements OnInit {
  
  hero: any;
  email: any;
  menteeform: any;
  constructor(private formBuilder: UntypedFormBuilder) { }
form! :  UntypedFormGroup;
submitted = false;
 
  ngOnInit(): void {
     email: new UntypedFormGroup (this.email, [
      Validators.required,
       Validators.email,
     ])

     };
    /*email validotor
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  */
    get f() { 
      return this.form.controls; 
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.form.reset();
    }
  box1Header = "Angular pros/cons"
  mentee: IMentorship[] = [];
}

