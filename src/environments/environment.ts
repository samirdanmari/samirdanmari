
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
  }
};

// Initialize Firebase

//const app = initializeApp(environment);

// export const environment = {
//   firebase: {
//     projectId: 'samirdanmari-c47b7',
//     appId: '1:226980998864:web:4b2f7531faf6174236f8d5',
//     databaseURL: 'https://samirdanmari-c47b7-default-rtdb.firebaseio.com',
//     storageBucket: 'samirdanmari-c47b7.appspot.com',
//     apiKey: 'AIzaSyCW3fMqT1bshE-yc9Bu-MYw9NvI9t0r4MQ',
//     authDomain: 'samirdanmari-c47b7.firebaseapp.com',
//     messagingSenderId: '226980998864',
//     measurementId: 'G-SMMN4FECWK',
//   },
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
