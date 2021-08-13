import { Button } from '@chakra-ui/react';
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

const WriteToCloudFirestore = () => {
  // const { user } = useUser();
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('myCollection')
        .doc() // leave as .doc() for a random unique doc name to be assigned
        .set({
          string_data: 'Shayan Modjtehedi',
          number_data: 2,
          boolean_data: true,
          map_data: { stringInMap: 'Hi', numberInMap: 7 },
          array_data: ['text', 4],
          null_data: null,
          time_stamp: firebase.firestore.Timestamp.fromDate(
            new Date('December 17, 1995 03:24:00')
          ),
          geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435),
        })
        .then(alert('Data was successfully sent to cloud firestore!'));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div>
      <Button colorScheme="whatsapp" onClick={sendData}>
        Write!
      </Button>
    </div>
  );
};

export default WriteToCloudFirestore;
