import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getFirestore,
getFirestore,
collection,
doc,
gertDocs,
getDoc,
addDoc,
deleteDoc,
updateDoc,
query,
orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyCTyJmWMigFqEbf12BF9yrOVQh1yWeoIH4",
  authDomain: "instan-cermelang.firebaseapp.com",
  projectId: "instan-cermelang",
  storageBucket: "instan-cermelang.appspot.com",
  messagingSenderId: "484031496322",
  appId: "1:484031496322:web:2526caec7a1e7527dfb49b",
  measurementId: "G-SCREWE22XP"
};

// inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore (aplikasi)
