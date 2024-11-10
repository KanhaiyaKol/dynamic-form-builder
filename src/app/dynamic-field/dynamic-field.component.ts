import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-field.component.html',
})
export class DynamicFieldComponent implements OnInit, OnChanges {
  @Input() fields: any[] = [];
  form: FormGroup = this.fb.group({});
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeFormControls();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fields']) {
      this.initializeFormControls();
    }
  }

  private initializeFormControls() {
    Object.keys(this.form.controls).forEach(control => this.form.removeControl(control));

    this.fields.forEach((field) => {
      const control = this.fb.control(
        '', 
        field.required ? Validators.required : null
      );
      this.form.addControl(field.label, control);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
