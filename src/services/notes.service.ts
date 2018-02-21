import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class NotesService {
    constructor (public afDB: AngularFireDatabase){

    }
    notes =[];

  /**
   * getNotes
   */
  public getNotes() {
    //   return this.notes;
    return this.afDB.list('notas/');
  }

  /**
   * getNote
id    */
  public getNote(id) {
      
    return this.afDB.object('notas/' + id);
    // return this.notes.filter(function (e, i) {
    //       return e.id == id  
    //   }) [0] || {id: null, title: null, description: null};
  }

  /**
   * createNote
   */
  public createNote(note) {
      this.afDB.database.ref('notas/' + note.id).set(note);
    //   this.notes.push(note);
  }

   public editNote(note) {
        // for (let i = 0; i < this.notes.length; i++){
        //     if (this.notes[i] == note) {
        //        this.notes[i] = note;
        //     }     
        // }   
        this.afDB.database.ref('notas/' + note.id).set(note);

    }

  /**
   * deleteNote
   */
  public deleteNote(note) {
    //   for (let i = 0; i < this.notes.length; i++){
    //        if (this.notes[i] == note) {
    //            this.notes.splice(i, 1);
    //         }     
    //     } 
    
    this.afDB.database.ref('notas/' + note.id).remove();

    }

}