import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from "@core/models/user.model";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;

interface GoogleProfile {
  email: string;
  family_name: string;
  given_name: string;
  granted_scopes: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) {}

  signIn(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user);
        // this.setUserData(res.user as User);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(fullName: string, email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (!res.user) return;
        const userData: User = {
          uid: res.user.uid,
          displayName: fullName,
          photoURL: res.user.photoURL,
          email: email,
          emailVerified: res.user.emailVerified
        }

        this.setUserData(userData);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleAuth(): void {
    this.afAuth.signInWithPopup(new GoogleAuthProvider().addScope('email'))
      .then((value: auth.UserCredential) => {
        const profile: GoogleProfile = value.additionalUserInfo?.profile as GoogleProfile;
        if (!profile || !value.user) return;

        this.setUserDataFromGoogle(value.user.uid, profile);
        console.log(profile);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }


  setUserData(user: User): any {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData);
  }

  setUserDataFromGoogle(uid: string, value: GoogleProfile): any {
    const userRef = this.afs.doc(
      `users/${uid}`
    );

    const userData: User = {
      uid,
      email: value.email,
      displayName: value.name,
      photoURL: value.picture,
      emailVerified: value.verified_email
    }

    return userRef.set(userData, {
      merge: true
    })
  }
}
