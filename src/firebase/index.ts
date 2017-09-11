
import { AngularFireModule, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCsUrv94jbBtQOey6N9UrNoNwZ7NBd1HJE',
  authDomain: 'project-management-app-292f1.firebaseapp.com',
  databaseURL: 'https://project-management-app-292f1.firebaseio.com',
  storageBucket: 'project-management-app-292f1.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
