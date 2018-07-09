import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}
export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = firebase.auth()


const app = firebase.initializeApp(config)
const db = firebase.database(app)
  export default Rebase.createClass(db)