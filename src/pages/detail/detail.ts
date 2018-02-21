import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from "../../services/notes.service";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id: null, title: null, description: null};
  id: null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
    this.id = navParams.get('id');
    if (this.id !=0) {
      
    this.note = notesService.getNote(this.id);
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote(){
    if (this.id != 0) {
      //Editando
      this.notesService.editNote(this.note);
    alert('Nota editada exitosamente');
    }
    else{
      //Nueva nota
    this.note.id = Date.now();
    this.notesService.createNote(this.note);
    alert('Nota creada exitosamente');
  }
   this.navCtrl.pop();
 }
}
