import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../../utils/forms/custom-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './template.html',
  styleUrls: ['./styles.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  submitForm(): void {
    console.log(this.contactForm);
  }
}
