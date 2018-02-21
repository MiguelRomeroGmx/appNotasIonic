import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class NotesService {
    constructor (public afDB: AngularFireDatabase){

    }
    notes =[
    {id:1, title:'Nota 1', description:'Descripción de nota 1'},
    {id:2, title:'Nota 2', description:'Descripción de nota 2'},
    {id:3, title:'Nota 3', description:'Descripción de nota 3'}
  ];

  /**
   * getNotes
   */
  public getNotes() {
      return this.notes;
  }

  /**
   * getNote
id    */
  public getNote(id) {
      return this.notes.filter(function (e, i) {
          return e.id == id  
      }) [0] || {id: null, title: null, description: null};
  }

  /**
   * createNote
   */
  public createNote(note) {
      this.afDB.database.ref('notas/' + note.id).set(note);
    //   this.notes.push(note);
  }

   public editNote(note) {
        for (let i = 0; i < this.notes.length; i++){
            if (this.notes[i] == note) {
               this.notes[i] = note;
            }     
        }   
    }

  /**
   * deleteNote
   */
  public deleteNote(note) {
      for (let i = 0; i < this.notes.length; i++){
           if (this.notes[i] == note) {
               this.notes.splice(i, 1);
            }     
        } 
    }

}