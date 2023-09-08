import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCATT-F9tOsUI3wYRM4fpKa6E-pOrbRdfU',
  authDomain: 'slack-clone-27ea3.firebaseapp.com',
  projectId: 'slack-clone-27ea3',
  storageBucket: 'slack-clone-27ea3.appspot.com',
  messagingSenderId: '347612838433',
  appId: '1:347612838433:web:2b34314a8372dfdcd74160'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
