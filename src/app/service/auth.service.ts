import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User=null;

  constructor(private auth:AngularFireAuth,public route:Router) {
  }
  public async login(){
    try{
      let provice = new firebase.auth.GoogleAuthProvider();
    await  this.auth.signInWithPopup(provice);
    this.user= await this.auth.currentUser;
    }catch(err){
    console.error(err);
  }
  }
  public async signout(){
    await this.auth.signOut;
this.route.navigate(["/home"])
    this.user=null;

  }
}
