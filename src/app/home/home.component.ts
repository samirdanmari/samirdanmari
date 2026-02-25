import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup,UntypedFormControl,Form,Validators, } from '@angular/forms';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
})
export class HomeComponent implements OnInit {
  hero: any;
  heroForm: any;

  constructor() { }
  mail: any = "https://mail.google.com/mail/u/0/#inbox?compose=new"

  ngOnInit(): void {
      this.heroForm = new UntypedFormGroup({
        name: new UntypedFormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/bob/i)
        ]),
        alterEgo: new UntypedFormControl(this.hero.alterEgo),
        power: new UntypedFormControl(this.hero.power, Validators.required)
      });

    }
    
    get name() { return this.heroForm.get('name'); }
    
    get power() { return this.heroForm.get('power'); }
  }

function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

