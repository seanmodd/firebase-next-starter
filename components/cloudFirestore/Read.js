import { Button, Heading } from '@chakra-ui/react';
import firebase from 'firebase';
import 'firebase/firestore';

//! configuring firebase!
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
//! end of configuring firebase!

const ReadDataFromCloudFirestore = () => {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc('my_document')
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      alert(
        'Data was successfully fetched from cloud firestore! Close this alert and check console for output.'
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Button colorScheme="twitter" onClick={readData}>
        Read Data From Cloud Firestore
      </Button>
    </>
  );
};

export default ReadDataFromCloudFirestore;
