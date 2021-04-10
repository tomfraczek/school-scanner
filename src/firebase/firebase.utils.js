import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAz3fAwnd8nUJylGc8rH8PD-4xO3Sinf1M",
    authDomain: "school-scanner-9988b.firebaseapp.com",
    projectId: "school-scanner-9988b",
    storageBucket: "school-scanner-9988b.appspot.com",
    messagingSenderId: "406998494012",
    appId: "1:406998494012:web:1f8de5329e7743176c0c39"
};

//create a new user in db
export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        })

      }catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }


  //add a new school to db
  export const createSchoolProfileDocument = async (schoolKey, schoolToAdd) => {
    const schoolRef = firestore.collection(schoolKey);
    const docRef = schoolRef.doc();
    console.log(docRef);

    try {
      await docRef.set(schoolToAdd);
    } catch (error){
      console.log('error creating school', error.message)
    }

    return docRef;
  }


  //convert the schools db snapschot to object
  export const convertSchoolsSnapschotToMap = (schools) => {
    const transformedSchool = schools.docs.map(doc => {
      return doc.data()
    })

    return transformedSchool;
  }
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  //INITIALIZE GOOGLE LOGIN
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;