import { Component, EventEmitter, Output } from '@angular/core';

interface FormField {
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent {
  formFields: FormField[] = [];
  fieldTypes = ['Text', 'Textarea', 'Dropdown', 'Checkbox', 'Radio'];

  @Output() formFieldsChange = new EventEmitter<FormField[]>();

  addField(fieldType: string) {
    const newField: FormField = {
      type: fieldType,
      label: `New ${fieldType} Field`,
      placeholder: fieldType === 'Text' ? 'Enter text here' : '', // example placeholder
      required: false,
      options: fieldType === 'Dropdown' || fieldType === 'Radio' ? ['Option 1', 'Option 2'] : undefined,
    };
    this.formFields.push(newField);
    this.formFieldsChange.emit(this.formFields); // Emit updated fields list
  }

  removeField(index: number) {
    this.formFields.splice(index, 1);
    this.formFieldsChange.emit(this.formFields); // Emit updated fields list
  }

  updateFields() {
    this.formFieldsChange.emit(this.formFields); // Emit fields when options change
  }
}
