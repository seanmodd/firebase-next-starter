// import firebase from 'firebase';
// // the below imports are option - comment out what you don't need
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/analytics';
// import 'firebase/performance';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyC5r72DkW4d47LKNjXM-yeSoBYoUsTqlSs',
//   authDomain: 'nextjs-carlson.firebaseapp.com',
//   databaseURL: 'https://nextjs-carlson-default-rtdb.firebaseio.com',
//   projectId: 'nextjs-carlson',
//   storageBucket: 'nextjs-carlson.appspot.com',
//   messagingSenderId: '282211589061',
//   appId: '1:282211589061:web:c470840ce8710bcbd4c9ac',
// };
// // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);

// // const clientCredentials = {
// //   apiKey: 'AIzaSyCtqG6UY4lB3PaF2iQ6nGMjxpcsEjWZ0W8',
// //   authDomain: 'nextjs-events-seanmodd.firebaseapp.com',
// //   databaseURL: 'https://nextjs-events-seanmodd-default-rtdb.firebaseio.com',
// //   projectId: 'nextjs-events-seanmodd',
// //   storageBucket: 'nextjs-events-seanmodd.appspot.com',
// //   messagingSenderId: '319556693749',
// //   appId: '1:319556693749:web:e89a2e123b88793e061fbc',
// // };

// export default function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     firebase.app();
//   }
// }

// // if (!firebase.apps.length) {
// //   firebase.initializeApp(clientCredentials);
// //   // Check that `window` is in scope for the analytics module!
// //   if (typeof window !== 'undefined') {
// //     // Enable analytics. https://firebase.google.com/docs/analytics/get-started
// //     if ('measurementId' in clientCredentials) {
// //       firebase.analytics();
// //       firebase.performance();
// //     }
// //   }
// //   console.log('Firebase was successfully init.');
// // }
