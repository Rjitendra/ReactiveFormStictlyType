import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe]
})
export class TableComponent {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('behera')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Jitendra',
      lastName: 'Kumar',
      address: {
        street: 'Kendrapara',
        city: 'tinimuhani',
        state: 'odisha',
        zip: '754001',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control('behera'));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
