/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrictlyTypedComponent } from './strictly-typed.component';

describe('StrictlyTypedComponent', () => {
  let component: StrictlyTypedComponent;
  let fixture: ComponentFixture<StrictlyTypedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrictlyTypedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictlyTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
