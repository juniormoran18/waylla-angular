import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import {AuthService } from '../../src/app/servicios/auth.service';
import { auth } from '../../node_modules/firebase';

// Imports up here..

interface Post {
  descripcion: string;
  distrito: string;
  imagen: string;
  //latitud: number;
  nombre: string;
  ubicacion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  public isLogin: boolean;
  public nombreUsuario : string;
  public emailUsuario: string;

  constructor(private afs: AngularFirestore,
  public authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      }else{
        this.isLogin = false;
      }
    })
    this.postsCol = this.afs.collection('lomas');
    this.posts = this.postsCol.valueChanges();
  }

  OnClickLogout(){
    this.authService.logout();
  }
}
