import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

export interface ISchool {
  schoolName: FormControl<string | null>;
  studentName: FormControl<string | null>;
  rollNo: FormControl<number | null>;
  age: FormControl<number | null>;
}

export interface IStudentGroup {
  schoolName: FormControl<string | null>;
  student: FormArray<any>;
}

export interface IStudent {
  studentName: FormControl<string | null>;
  rollNo: FormControl<number | null>;
  age: FormControl<number | null>;
}

@Component({
  standalone: true,
  selector: 'app-strictly-typed',
  templateUrl: './strictly-typed.component.html',
  styleUrls: ['./strictly-typed.component.css'],
  imports: [ReactiveFormsModule, NgFor, JsonPipe],
})
export class StrictlyTypedComponent implements OnInit {
  email = new FormControl(''); //---1
  name = new FormControl('jitendra', { nonNullable: true }); //---2
  mobile = new FormControl<string | null>(null); //---3
  // const email = new FormControl(null);
  // email.setValue('angularrox@gmail.com'); // Error!
  // avoid above error mobile = new FormControl<string | null>(null);
  addressGroup!: FormGroup;
  address = new FormArray([new FormControl('Kendrapara')]);
  studentGroup!: FormGroup<IStudentGroup>;
  student = new FormArray([
    new FormGroup<IStudent>({
      studentName: new FormControl('Jitendra'),
      rollNo: new FormControl(1),
      age: new FormControl(10,{ nonNullable: true }),
    }),
  ]);
  schoolGroup!: FormGroup<ISchool>;

  constructor() {
    this.addressGroup = new FormGroup({
      address: this.address,
    });
    this.schoolGroup = new FormGroup<ISchool>({
      schoolName: new FormControl('Gulnger High School'),
      studentName: new FormControl('Jitendra'),
      rollNo: new FormControl(27),
      age: new FormControl(15),
    });
    this.studentGroup = new FormGroup<IStudentGroup>({
      schoolName: new FormControl('Gulnger High School',{ nonNullable: true }),
      student: this.student,
    });
  }

  ngOnInit() {
    this.address.push(new FormControl('At- Nageswarpur'));
  }

  update() {
    this.email.setValue('jitu.kdp27@gmail.com');
    this.email.setValue('Nancy');
    this.mobile.setValue('7702889920');
  }
  reset() {
    this.email.reset();
    this.name.reset();
    this.mobile.reset();
    console.log(this.email.value); //---null
    console.log(this.name.value); //---jitendra
    console.log(this.mobile.value); //---null
  }
  formArrayAdd() {
    this.address.push(new FormControl('Newly added field'));
  }
  formArrayReset() {
    this.address.reset();
    console.log(this.address.value);
  }
  formArrayUpdate() {
    //this.address.setValue(['Kendrapara', 'At- Nageswarpur']);
    this.address.controls.forEach((control) => {
      control.setValue('Jitendra');
    });
    console.log(this.address.value);
  }
  formGroupUpdate() {
    this.schoolGroup.setValue({
      schoolName: 'XYZ',
      studentName: 'JITU',
      rollNo: 20,
      age: 22,
    });
  }
  formGroupReset() {
    this.schoolGroup.reset();
  }
  formArrayAddI(){
    this.student.push(new FormGroup<IStudent>({
      studentName: new FormControl('Jitendra'),
      rollNo: new FormControl(),
      age: new FormControl(),
    }));
  }
  formArrayUpdateI(){
    this.student.controls.forEach((control) => {
      control.setValue({
        studentName: 'Jitendra',
        rollNo: 1,
        age: 10
      });
    });
    
  }
  formArrayResetI(){
    this.studentGroup.reset();
  }
}
