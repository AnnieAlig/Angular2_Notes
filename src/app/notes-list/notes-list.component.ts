import { Component, OnInit } from '@angular/core';
import {NotesService} from '../-services/notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass'],
  providers: [NotesService]
})
export class NotesListComponent implements OnInit {

  constructor(
    private ns: NotesService
  ) { }

  notes = this.ns.getNotes();

  ngOnInit() {
  }

  removeNote(i){
    this.ns.removeNote(i);
  }

  changeColor(i, newColor){
    this.ns.changeColor(i, newColor);
  }
}
