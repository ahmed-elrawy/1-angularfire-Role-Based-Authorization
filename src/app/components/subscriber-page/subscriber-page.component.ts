import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-subscriber-page',
  templateUrl: './subscriber-page.component.html',
})
export class SubscriberPageComponent implements OnInit {

  postRef;
  post$;
  user;

  constructor(private afs: AngularFirestore, public auth: AuthService) {
    this.auth.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.postRef = this.afs.doc('posts/myTestPost')
    this.post$ = this.postRef.valueChanges()
    console.log('subscriber works')
  }

  editPost() {
    this.postRef.update({ title: 'Edited Title!' })
  }

  deletePost() {
    this.postRef.delete()
  }

}
