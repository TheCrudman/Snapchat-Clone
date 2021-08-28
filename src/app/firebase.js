import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBV6kdO339hDIJIy5NNTRZ0tXM51mgX8DM',
  authDomain: 'snapchat-clone-2dda6.firebaseapp.com',
  projectId: 'snapchat-clone-2dda6',
  storageBucket: 'snapchat-clone-2dda6.appspot.com',
  messagingSenderId: '414843208416',
  appId: '1:414843208416:web:a5fd09f3c6ceadb43ac685',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }

// 29:36
