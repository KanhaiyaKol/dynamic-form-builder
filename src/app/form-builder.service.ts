import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private fieldCount = 0;

  createField(type: string) {
    const name = `field${this.fieldCount++}`;
    const field: any = {
      type,
      name,
      control: new FormControl('', Validators.required)
    };

    switch (type) {
      case 'text':
      case 'textarea':
        field.label = 'Enter text';
        field.placeholder = 'Placeholder';
        break;
      case 'dropdown':
        field.label = 'Select an option';
        field.options = ['Option 1', 'Option 2', 'Option 3'];
        break;
      case 'checkbox':
        field.label = 'Check this option';
        break;
      case 'radio':
        field.label = 'Choose an option';
        field.options = ['Option 1', 'Option 2'];
        break;
    }

    return field;
  }
}
