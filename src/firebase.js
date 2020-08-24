import firebase from 'firebase'

import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
