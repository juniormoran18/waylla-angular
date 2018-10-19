import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

// Imports up here..

interface Post {
  titulo: string;
  descripcion: string;
  image_url: string;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styles: []
})

export class PublicacionesComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

}
