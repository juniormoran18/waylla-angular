import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

interface Post {
  descripcion: string;
  distrito: string;
  imagen: string;
  //latitud: number;
  nombre: string;
  ubicacion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    //this.posts = this.afs.collection.orderBy("nombre");
    this.postsCol = this.afs.collection('lomas').orderBy("nombre");
    this.posts = this.postsCol.valueChanges();
  }

}
