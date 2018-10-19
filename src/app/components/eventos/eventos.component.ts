import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

interface Post {
  titulo: string;
  fecha_inicial: string;
  fecha_final: string;
  costo: string;
  destino: string;
  descripcion: string;
  detalle_costo: string;
  recomendaciones: string;
  requisito: string;
  hora_inicial: string;
  hora_final: string;
}

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  titulo:string;
  descripcion: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('eventos');
    this.posts = this.postsCol.valueChanges();
  }

  addPost() {
    this.afs.collection('eventos').add({'titulo': this.titulo, 'descripcion': this.descripcion});
  }

}
