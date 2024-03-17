import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StrictlyTypedComponent } from './strictly-typed/strictly-typed.component';
export type EditorType =
  | 'name'
  | 'profile'
  | 'strictlytyped'
  | 'strictlytypedfb';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NameEditorComponent,
    TableComponent,
    StrictlyTypedComponent,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }
  get strictlyTyped() {
    return this.editor === 'strictlytyped';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
