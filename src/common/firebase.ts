import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBEFNEMUoXavfKyK4ITj1PPJFS3mZtN7o',
  authDomain: 'grigori-labs-sm.firebaseapp.com',
  projectId: 'grigori-labs-sm',
  storageBucket: 'grigori-labs-sm.appspot.com',
  messagingSenderId: '300208298706',
  appId: '1:300208298706:web:fe3960dd1aed38aaf22b0b',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
