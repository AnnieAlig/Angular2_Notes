import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { ColorEditorComponent } from './color-editor/color-editor.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteEditorComponent,
    NotesListComponent,
    ColorEditorComponent,
    HeaderComponent,
    StartComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    // RouterModule.forRoot = ([
    //   {
    //     path: '',
    //     component: 'StartComponent'
    //   },
    //   {
    //     path: 'notes',
    //     component: 'NotesCompomemt'
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
