import { EmailValidator } from "@angular/forms";

export interface MenteeDetails {
    firstname: string;
    surname: string;
    lastname:string;
    course: any;
    nativeLanguege: string;
    languagePreference: any;
    age: number;
    gender: string;
    email: EmailValidator;
    address: string;

}
