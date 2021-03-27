import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {
  }

  doRegister(value: any) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            //update firebase object data and store in database
            res.user.updateProfile({ displayName: value.name })
              .then(() => {
                this.db.collection<any>('users').doc(res.user.uid).set({
                  "uid": res.user.uid,
                  "name": res.user.displayName,
                  "email": res.user.email
                }).then(updateRes => {
                  //return promise
                  resolve(res);
                }
                )
              })
              .catch(error => {
                console.log("There was an error when updating profile after registration" + error);
                reject(res);
              });
          },
          err => reject(err))
    })
  }

  doLogin(value: any) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res)
          },
          err => reject(err))
    })
  }

  doLogout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(
          res => resolve(res),
          err => reject(err))
    });
  }

  doRememberPassword(value: any) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(value.email)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  getUserDetails() {
    return this.afAuth.auth.currentUser;
  }

  getUserName() {
    return this.afAuth.auth.currentUser.displayName;
  }

}