import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAYb7nJL7BhTaKLvkRJplYjg4QKFm0NqQ",
  authDomain: "twitter-clone-71eec.firebaseapp.com",
  projectId: "twitter-clone-71eec",
  storageBucket: "twitter-clone-71eec.appspot.com",
  messagingSenderId: "1005582576208",
  appId: "1:1005582576208:web:32b4944e1f30288954bf55",
  measurementId: "G-SWVVK7TPG1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getPosts(db) {
//   const postsCol = collection(db, "posts");
//   const postsSnapshot = await getDocs(postsCol);
//   const postsList = postsSnapshot.docs.map((doc) => doc.data());
//   return postsList;
// }

export default db;
