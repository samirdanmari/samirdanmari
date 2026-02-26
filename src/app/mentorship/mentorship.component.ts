import { Component, OnInit } from '@angular/core';
import { IMentorship } from '../mentorship';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-mentorship',
    templateUrl: './mentorship.component.html',
    styleUrls: ['./mentorship.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class MentorshipComponent implements OnInit {
  mentorshipForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mentorshipForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: [''],
      lastname: [''],
      course: ['Core Javascript'],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  get f() { return this.mentorshipForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.mentorshipForm.invalid) {
      return;
    }

    const data = this.mentorshipForm.value;
    
    // Construct the WhatsApp Message
    const message = `Hello Samir! I want to join your Mentorship Program.%0A%0A` +
                    `*Name:* ${data.firstname} ${data.surname}%0A` +
                    `*Course:* ${data.course}%0A` +
                    `*Email:* ${data.email}%0A` +
                    `*Goals:* ${data.address}`;

    // Your WhatsApp Number (Include international code, no + or spaces)
    const phoneNumber = "2348187166115"; 
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}

